<script>
  import CreateStepForm from './CreateStepForm.svelte';

  export let step;

  const addIngredient = e => {
    const newIngredient = {
      unifOfMeasurmentId: '',
      ingredientId: '',
      amount: '',
    };

    step.ingredients = [...step.ingredients, newIngredient];
  }
</script>

<h4>Step {step.orderNumber}</h4>
<CreateStepForm on:add-ingredient={addIngredient} {step} />
