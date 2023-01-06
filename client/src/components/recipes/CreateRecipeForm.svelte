<script>
  import { onMount } from 'svelte';
  import { categoriesApi, ingredientsApi, unitsOfMeasurementApi } from '@/api/index';
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

  $: steps = recipeForm.steps;

  const addStep = e => {
    const newStep = {
      description: '',
      time: '',
      orderNumber: recipeForm.steps.length + 1,
      ingredients: [],
    };

    recipeForm.steps = [...recipeForm.steps, newStep];
  };

  const moveStepUp = e => {
    moveHelper(e.detail);
  };

  const moveStepDown = e => {
    // To move step down, it's like moving the next step up, same thing - so we use index of next step, which is e.detail + 1
    moveHelper(e.detail + 1);
  };

  const moveHelper = stepIndex => {
    let newSteps = recipeForm.steps.slice(0, stepIndex - 1);
    newSteps.push(steps[stepIndex], steps[stepIndex - 1], ...steps.slice(stepIndex + 1));
    recipeForm.steps = [...newSteps];
  };

  const handleFormSubmit = e => {
    console.log('Submit');
    console.log(recipeForm);
  };

  onMount(async () => {
    // TODO: currently, if fetch fails, categories are set to [], but in the future this should inform user about error!
    // TODO: currently, if fetch fails, ingredients and units are set to [], but in the future this should inform user about error! (same story as categories)
    categories = await categoriesApi.fetchAll().catch(() => [
      { id: 0, name: 'meat' },
      { id: 1, name: 'vegan' },
    ]);
    ingredients = await ingredientsApi.fetchAll().catch(() => [
      { id: 0, name: 'corn' },
      { id: 1, name: 'cream' },
    ]);
    unitsOfMeasurement = await unitsOfMeasurementApi.fetchAll().catch(() => [
      { id: 0, name: 'kilogram' },
      { id: 1, name: 'liter' },
    ]);
  });

  // This will force user to have at least one step for each recipe
  addStep();
</script>

<label class="item" for="name">Recipe name: </label>
<input class="item" name="name" placeholder="recipe name" bind:value={recipeForm.name} />
<label class="item" for="description">Recipe description: </label>
<input class="item" type="textbox" name="description" bind:value={recipeForm.description} />
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
<CreateStepsList
  on:add-step={addStep}
  on:move-up={moveStepUp}
  on:move-down={moveStepDown}
  {steps}
  {ingredients}
  {unitsOfMeasurement}
/>
<button class="item" on:click={handleFormSubmit}>Create Recipe</button>

<style>
  .item {
    display: block;
  }
</style>
