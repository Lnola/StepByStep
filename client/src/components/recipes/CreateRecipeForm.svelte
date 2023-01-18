<script>
  import { onMount } from 'svelte';
  import { categoryApi, ingredientApi, unitOfMeasurementApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';

  let recipeForm = {
    name: '',
    description: '',
    isPublished: false,
    categoryId: '',
    steps: [],
  };
  let categories = [];
  let ingredients = [];
  let unitsOfMeasurement = [];

  const handleFormSubmit = e => {};

  onMount(async () => {
    categories = await categoryApi.fetchAll();
    ingredients = await ingredientApi.fetchAll();
    unitsOfMeasurement = await unitOfMeasurementApi.fetchAll();
  });
</script>

<fieldset class="fieldset">
  <legend>Recipe name</legend>
  <input class="input" name="name" placeholder="Give your recipe a name" bind:value={recipeForm.name} />
</fieldset>

<fieldset class="fieldset">
  <legend>Recipe description!</legend>
  <textarea class="input" rows="4" name="description" placeholder="Describe your secret recipe!" bind:value={recipeForm.description}></textarea>
</fieldset>

<div class="item">
  <input type="radio" name="isPublished" value={false} bind:group={recipeForm.isPublished} />Private
  <input type="radio" name="isPublished" value={true} bind:group={recipeForm.isPublished} />Public
</div>
<select class="item" name="categoryId" bind:value={recipeForm.categoryId}>
  <option selected disabled value="">Select category</option>
  {#each categories as category}
    <option value={category.id}>{category.name}</option>
  {/each}
</select>
<CreateStepsList bind:steps={recipeForm.steps} {ingredients} {unitsOfMeasurement} />
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
