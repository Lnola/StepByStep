<script>
  import { onMount } from 'svelte';
  import { categoryApi, ingredientApi, unitOfMeasurementApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';
  import settings from '@/settings/settings.json';
  import { minLengthValidator, requiredValidator, selectionRequiredValidator } from '@/utils/validation/validators';
  import FieldsetInput from '../common/FieldsetInput.svelte';
    import Button from '../common/Button.svelte';

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
  }; 

  const recipeForm = {
    name: {
      value: '',
      type: 'text',
      valid: false,
      label: 'Recipe name',
      placeholder: 'Give your recipe a name',
      validators: [requiredValidator()],
    },
    description: {
      value: '',
      type: 'textarea',
      valid: false,
      label: 'Recipe description!',
      placeholder: 'Describe your secret recipe!',
      validators: [requiredValidator(), minLengthValidator(settings.minLength.description)],
    },
    isPublished: false,
    categories: { 
      type: 'select',
      valid: false,
      label: 'Categories',
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
      label: 'Recipe steps',
      placeholder: 'Enter your recipe steps!',
      validators: [],
    },
  };

  const handleFormSubmit = e => {
    console.log(recipeForm);
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
  <CreateStepsList bind:steps={recipeForm.steps.value} {ingredients} {unitsOfMeasurement} />
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
