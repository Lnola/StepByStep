<script>
  import CreateStepForm from './CreateStepForm.svelte';

  export let step;
  export let show;

  const addIngredient = e => {
    const newIngredient = {
      unifOfMeasurmentId: '',
      ingredientId: '',
      amount: '',
    };

    step.ingredients = [...step.ingredients, newIngredient];
  };

  const toggle = () => show = !show;

  $: btnText = show ? 'Hide' : 'Expand';
</script>

<div class="bar">
  <h4>Step {step.orderNumber}</h4>
  <button on:click={toggle}>{btnText}</button>
</div>
{#if (show)}
  <CreateStepForm on:add-ingredient={addIngredient} {step} />
{/if}

<style>
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
