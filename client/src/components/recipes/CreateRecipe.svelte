<script>
  import { categoriesApi } from '@/api/index';
  import { onMount } from 'svelte';
  import CreateRecipeForm from './CreateRecipeForm.svelte';

  let recipeForm = {
    name: '',
    description: '',
    steps: [],
  };
  const stepForm = {
    description: '',
    time: '',
    orderNumber: '',
    ingredients: [],
  };
  const ingredientForm = {
    unifOfMeasurmentId: '',
    ingredientId: '',
    stepId: '',
    amount: '',
  };

  let categories = [];

  const addStep = () => {
    const newStep = stepForm;
    newStep.orderNumber = recipeForm.steps.length + 1;

    recipeForm.steps = [...recipeForm.steps, newStep];
  };

  addStep();

  const handleFormSubmit = e => {
    console.log(e);
  };

  onMount(async () => {
    // TODO: currently, if fetch fails, categories are set to [], but in the future this should inform user about error!
    categories = await categoriesApi.fetchAll().catch(() => []);
  });
</script>

<h2>Create recipe</h2>
<CreateRecipeForm {categories} steps={recipeForm.steps} />
