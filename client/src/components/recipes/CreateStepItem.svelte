<script>
  import CreateStepForm from './CreateStepForm.svelte';
  import { createEventDispatcher } from 'svelte';

  export let show;
  export let enableUp;
  export let enableDown;
  export let step;
  export let index;
  export let ingredients;
  export let unitsOfMeasurement;

  const dispatch = createEventDispatcher();

  const addIngredient = e => {
    const newIngredient = {
      unitOfMeasurmentId: '',
      ingredientId: '',
      amount: '',
    };

    step.ingredients = [...step.ingredients, newIngredient];
  };

  const toggle = () => (show = !show);

  $: toggleBtnText = show ? '-' : '+';
</script>

<div class="bar">
  <h4>Step {step.orderNumber}</h4>
  <div class="btns">
    {#if enableUp}
      <button on:click={() => dispatch('move-up', index)}>&uarr</button>
    {/if}
    {#if enableDown}
      <button on:click={() => dispatch('move-down', index)}>&darr</button>
    {/if}
    <button on:click={toggle}>{toggleBtnText}</button>
  </div>
</div>
{#if show}
  <CreateStepForm on:add-ingredient={addIngredient} {step} {ingredients} {unitsOfMeasurement} />
{/if}

<style>
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btns {
    display: flex;
    justify-content: end;
    align-items: center;
  }
</style>
