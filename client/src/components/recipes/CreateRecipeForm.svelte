<script>
  import { onMount } from 'svelte';
  import { categoryApi, ingredientApi, recipeApi, stepApi, unitOfMeasurementApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';
  import settings from '@/settings/settings.json';
  import { minLengthValidator, requiredValidator, selectionRequiredValidator } from '@/utils/validation/validators';
  import FieldsetInput from '../common/FieldsetInput.svelte';
  import Button from '../common/Button.svelte';
  import { redirect } from '@/utils/router/routing';

  let categories = [];
  let ingredients = [];
  let unitsOfMeasurement = [];

  const selectors = {
    category: {
      value: [],
      type: 'category',
      forgive: true,
      source: categories,
      defaultSelection: 'Select category',
    },
    step: {
      value: [],
      type: 'step',
      forgive: true,
      innerSelector: { type: 'ingredient', forgive: true },
    },
  };

  const recipeForm = {
    name: {
      value: '',
      type: 'text',
      valid: false,
      label: '*Recipe name',
      placeholder: 'Give your recipe a name',
      validators: [requiredValidator()],
    },
    description: {
      value: '',
      type: 'textarea',
      valid: false,
      label: '*Recipe description',
      placeholder: 'Describe your secret recipe!',
      validators: [requiredValidator(), minLengthValidator(settings.minLength.description)],
    },
    isPublished: false,
    categories: {
      type: 'select',
      valid: false,
      label: '*Categories',
      placeholder: 'What category is your recipe?',
      selector: selectors.category,
      validators: [selectionRequiredValidator(selectors.category)],
    },
    imageUrl: {
      value: '',
      type: 'text',
      valid: false,
      label: 'Recipe image',
      placeholder: 'Paste your recipe image link here',
      validators: [],
    },
    steps: {
      value: [],
      type: 'list',
      valid: false,
      label: '*Recipe steps',
      placeholder: 'Enter your recipe steps!',
      selector: selectors.step,
      validators: [selectionRequiredValidator(selectors.step)],
    },
  };

  const handleFormSubmit = async (e) => {
    const message = validateForm();
    if (message !== '') {
      alert(message);
      return;
    }

    const response = confirm('Are you sure you want to create this recipe?');
    if (!response) return;

    try {
      const recipe = await recipeApi.create(prepareDataForRecipe());

      recipeForm.steps.value.forEach(async (step, index) => {
        await stepApi.create(prepareDataForStep(step, index + 1, recipe.recipeId));
      });

      setTimeout(() => redirect('Home'), 1500); // timeout because of authError
    } catch (err) {
      alert('Greška prilikom stvaranja recepta');
    }
  };

  const validateForm = () => {
    let message = '';

    if (!recipeForm.name.valid) message = 'Recipe name is not valid';
    else if (!recipeForm.description.valid) message = 'Recipe description is not valid';
    else if (!recipeForm.categories.valid || recipeForm.categories.selector.forgive)
      message = 'Recipe categories are not valid';
    else if (!recipeForm.steps.valid || recipeForm.steps.selector.forgive) message = 'Recipe steps are not valid';
    recipeForm.steps.value.forEach((step, index) => {
      if (message !== '') return;
      if (!step.description.valid) message = `Step ${index + 1} description is not valid`;
      else if (!step.time.valid) message = `Step ${index + 1} time is not valid`;
      else if (!step.ingredients.valid || step.ingredients.selector.forgive)
        message = `Step ${index + 1} ingredients are not valid`;
      step.ingredients.value.forEach((ingredient, index) => {
        if (message !== '') return;
        if (!ingredient.ingredientId.valid)
          message = `Step ${index + 1}, ingredient ${index + 1}, ingredient name is not valid`;
        else if (!ingredient.amount.valid)
          message = `Step ${index + 1}, ingredient ${index + 1}, ingredient amount is not valid`;
        else if (!ingredient.unitOfMeasurementId.valid)
          `Step ${index + 1}, ingredient ${index + 1}, ingredient unit of measurement is not valid`;
      });
    });

    return message;
  };

  const prepareDataForRecipe = () => {
    return {
      recipe: {
        name: recipeForm.name.value,
        description: recipeForm.description.value,
        isPublished: recipeForm.isPublished,
        publishedAt: recipeForm.isPublished ? new Date() : null,
        createdAt: new Date(),
        userId: JSON.parse(localStorage.getItem('user')).id,
        imageUrl: recipeForm.imageUrl.value,
      },
      categories: recipeForm.categories.selector.value.map(category => category.id),
    };
  };

  const prepareDataForStep = (step, orderNumber, recipeId) => {
    const timeObj = step.time.value;
    const time = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;

    const ingredients = [];
    step.ingredients.value.forEach(ingredient => {
      ingredients.push({
        unitOfMeasurementId: ingredient.unitOfMeasurementId.value,
        ingredientId: ingredient.ingredientId.value,
        amount: parseInt(ingredient.amount.value),
      });
    });

    return {
      step: {
        description: step.description.value,
        time: time,
        orderNumber: orderNumber,
        recipeId: recipeId,
      },
      ingredients: ingredients,
    };
  };

  onMount(async () => {
    recipeForm.categories.selector.source = await categoryApi.fetchAll();
    ingredients = await ingredientApi.fetchAll();
    unitsOfMeasurement = await unitOfMeasurementApi.fetchAll();
  });
</script>

<FieldsetInput
  bind:value={recipeForm.name.value}
  on:valid={({ detail }) => (recipeForm.name.valid = detail.valid)}
  label={recipeForm.name.label}
  placeholder={recipeForm.name.placeholder}
  validators={recipeForm.name.validators}
/>
<FieldsetInput
  bind:value={recipeForm.description.value}
  on:valid={({ detail }) => (recipeForm.description.valid = detail.valid)}
  type={recipeForm.description.type}
  label={recipeForm.description.label}
  placeholder={recipeForm.description.placeholder}
  rows={settings.descriptionRows.large}
  validators={recipeForm.description.validators}
/>

<FieldsetInput
  bind:selector={recipeForm.categories.selector}
  on:valid={({ detail }) => (recipeForm.categories.valid = detail.valid)}
  type={recipeForm.categories.type}
  label={recipeForm.categories.label}
  placeholder={recipeForm.categories.placeholder}
  validators={recipeForm.categories.validators}
/>

<fieldset class="fieldset">
  <legend>{recipeForm.steps.label}</legend>
  <CreateStepsList
    bind:steps={recipeForm.steps.value}
    bind:selector={recipeForm.steps.selector}
    on:valid={({ detail }) => (recipeForm.steps.valid = detail.valid)}
    {ingredients}
    {unitsOfMeasurement}
    validators={recipeForm.steps.validators}
  />
</fieldset>

<FieldsetInput
  bind:value={recipeForm.imageUrl.value}
  on:valid={({ detail }) => (recipeForm.imageUrl.valid = detail.valid)}
  label={recipeForm.imageUrl.label}
  placeholder={recipeForm.imageUrl.placeholder}
  validators={recipeForm.imageUrl.validators}
/>

<div class="radio-btns">
  <input class="radio" type="radio" name="isPublished" value={false} bind:group={recipeForm.isPublished} />Private
  <input class="radio" type="radio" name="isPublished" value={true} bind:group={recipeForm.isPublished} />Public
</div>

<Button on:click={handleFormSubmit}>Create recipe</Button>

<style>
  .fieldset {
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    text-align: center;
    font-size: small;
    color: var(--color-accent);
  }

  .radio-btns {
    margin-bottom: 2vh;
  }
</style>
