<script>
  import { onMount } from 'svelte';
  import { categoryApi, ingredientApi, unitOfMeasurementApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';
  import settings from '@/settings/settings.json';
  import { minLengthValidator, requiredValidator, selectionRequiredValidator } from '@/utils/validation/validators';
  import FieldsetInput from '../common/FieldsetInput.svelte';

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
      // value: selectors.category.value, // TODO: see how to bind this with selector.value, not important
      type: 'select',
      valid: false,
      label: 'Categories',
      placeholder: 'What category is your recipe?',
      selector: selectors.category,
      validators: [selectionRequiredValidator(selectors.category)],
    },
    imageUrl: '',
    steps: [],
  };

  const handleFormSubmit = e => {};

  onMount(async () => {
    recipeForm.categories.selector.source = await categoryApi.fetchAll();
    ingredients = await ingredientApi.fetchAll();
    unitsOfMeasurement = await unitOfMeasurementApi.fetchAll();
  });
</script>

<FieldsetInput
  bind:value={recipeForm.name.value}
  label={recipeForm.name.label}
  placeholder={recipeForm.name.placeholder}
  validators={recipeForm.name.validators}
/>
<FieldsetInput
  bind:value={recipeForm.description.value}
  type={recipeForm.description.type}
  label={recipeForm.description.label}
  placeholder={recipeForm.description.placeholder}
  rows={settings.descriptionRows.large}
  validators={recipeForm.description.validators}
/>

<div>
  <input type="radio" name="isPublished" value={false} bind:group={recipeForm.isPublished} />Private
  <input type="radio" name="isPublished" value={true} bind:group={recipeForm.isPublished} />Public
</div>

<FieldsetInput
  bind:selector={recipeForm.categories.selector}
  type={recipeForm.categories.type}
  label={recipeForm.categories.label}
  placeholder={recipeForm.categories.placeholder}
  validators={recipeForm.categories.validators}
/>

<fieldset class="fieldset">
  <legend>Recipe steps</legend>
  <CreateStepsList bind:steps={recipeForm.steps} {ingredients} {unitsOfMeasurement} />
</fieldset>

<button class="item" on:click={handleFormSubmit}>Create recipe</button>

<style>
  .fieldset {
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }
</style>
