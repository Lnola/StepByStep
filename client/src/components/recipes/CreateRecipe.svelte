<script>
  import { categoriesApi } from '@/api/index';
  import { onMount } from 'svelte';
  import CreateRecipeForm from './CreateRecipeForm.svelte';

  let recipeForm = {
    name: '',
    description: '',
    steps: [],
  };

  $: steps = recipeForm.steps;

  let categories = [];

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

<div class="container">
  <div>
    <h2>Create recipe</h2>
    <CreateRecipeForm
      on:add-step={addStep}
      on:move-up={moveStepUp}
      on:move-down={moveStepDown}
      on:create-recipe={handleFormSubmit}
      {categories}
      {steps}
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
</style>
