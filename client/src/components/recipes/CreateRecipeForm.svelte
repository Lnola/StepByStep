<script>
  import { onMount } from 'svelte';
  import { categoriesApi } from '@/api/index';
  import CreateStepsList from './CreateStepsList.svelte';

  let recipeForm = {
    name: '',
    description: '',
    steps: [],
  };
  let categories = [];

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
    let index = e.detail;

    let newSteps = recipeForm.steps.slice(0, index - 1);
    newSteps.push(steps[index], steps[index - 1], ...steps.slice(index + 1));
    recipeForm.steps = [...newSteps];
  };

  const moveStepDown = e => {
    let index = e.detail;

    let newSteps = recipeForm.steps.slice(0, index);
    newSteps.push(steps[index + 1], steps[index], ...steps.slice(index + 2));
    recipeForm.steps = [...newSteps];
  };

  const handleFormSubmit = e => {
    console.log('Submit');
    console.log(recipeForm);
  };

  onMount(async () => {
    // TODO: currently, if fetch fails, categories are set to [], but in the future this should inform user about error!
    categories = await categoriesApi.fetchAll().catch(() => []);
  });

  // This will force user to have at least one step for each recipe
  addStep();
</script>

<label class="item" for="name">Recipe name: </label>
<input class="item" name="name" placeholder="recipe name" />
<label class="item" for="description">Recipe description: </label>
<input class="item" type="textbox" name="description" />
<div class="item">
  <input type="radio" name="isPublished" value="false" checked />Private
  <input type="radio" name="isPublished" value="true" />Public
</div>
<select class="item" name="categoryId">
  <option selected disabled value="">Select category</option>
  {#each categories as category}
    <option value={category.id}>{category.name}</option>
  {/each}
</select>
<CreateStepsList on:add-step={addStep} on:move-up={moveStepUp} on:move-down={moveStepDown} {steps} />
<button class="item" on:click={handleFormSubmit}>Create Recipe</button>

<style>
  .item {
    display: block;
  }
</style>
