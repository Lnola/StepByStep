<script>
  import { onMount } from 'svelte';
  import { categoryApi, ingredientApi, unitOfMeasurementApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';
  import CategoriesList from './CategoriesList.svelte';
  import settings from '@/settings/settings.json';

  let recipeForm = {
    name: '',
    description: '',
    isPublished: false,
    imageUrl: '',
    categories: [],
    steps: [],
  };
  let categories = [];
  let ingredients = [];
  let unitsOfMeasurement = [];

  const handleFormSubmit = e => {};

  const handleCategorySelection = e => {
    const lenBefore = recipeForm.categories.length;
    recipeForm.categories = recipeForm.categories.filter(elem => elem.id !== e.target.value);
    const lenAfter = recipeForm.categories.length;

    if (lenAfter === lenBefore) {
      recipeForm.categories.push({ id: e.target.value, text: e.target.text });
    }
  };

  onMount(async () => {
    categories = await categoryApi.fetchAll();
    ingredients = await ingredientApi.fetchAll();
    unitsOfMeasurement = await unitOfMeasurementApi.fetchAll();
  });
</script>

<fieldset class="fieldset">
  <legend>Recipe name</legend>
  <input
    class="input"
    name="name"
    placeholder="Give your recipe a name"
    minlength={settings.minLength.recipeName}
    bind:value={recipeForm.name}
  />
</fieldset>

<fieldset class="fieldset">
  <legend>Recipe description!</legend>
  <textarea
    class="input"
    rows="4"
    name="description"
    placeholder="Describe your secret recipe!"
    minlength={settings.minLength.description}
    bind:value={recipeForm.description}
  />
</fieldset>

<div>
  <input type="radio" name="isPublished" value={false} bind:group={recipeForm.isPublished} />Private
  <input type="radio" name="isPublished" value={true} bind:group={recipeForm.isPublished} />Public
</div>

<fieldset class="fieldset">
  <legend>Categories</legend>
  <CategoriesList categories={recipeForm.categories} on:remove-category={e => handleCategorySelection(e.detail)} />
  <select name="categoryId">
    <option selected disabled value="">Select category</option>
    {#each categories as category}
      <option value={category.id} on:click={handleCategorySelection}>{category.name}</option>
    {/each}
  </select>
</fieldset>

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

  .input {
    width: 100%;
    resize: vertical;
    min-height: 3vh;
    max-height: fit-content;
    border: none;
    outline: none;
  }

  .input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
</style>
