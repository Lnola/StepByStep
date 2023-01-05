<script>
  import { categoriesApi } from '@/api/index';
  import { onMount } from 'svelte';
  import CreateRecipeForm from './CreateRecipeForm.svelte';

  let recipeForm = {
    name: '',
    description: '',
    steps: [],
  };

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

  const handleFormSubmit = e => {
    console.log("Submit");
    console.log(recipeForm);
  };

  onMount(async () => {
    // TODO: currently, if fetch fails, categories are set to [], but in the future this should inform user about error!
    categories = await categoriesApi.fetchAll().catch(() => []);
  });

  // This will force user to have at least one step for each recipe
  addStep();
</script>

<h2>Create recipe</h2>
<CreateRecipeForm on:add-step={addStep} {categories} steps={recipeForm.steps} />
