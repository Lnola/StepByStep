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

<label class="item" for="name">Recipe name: </label>
<input class="item" name="name" placeholder="name" bind:value={recipeForm.name} />
<label class="item" for="description">Recipe description: </label>
<input class="item" type="textbox" name="description" placeholder="description" bind:value={recipeForm.description} />
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
  .item {
    display: block;
  }
</style>