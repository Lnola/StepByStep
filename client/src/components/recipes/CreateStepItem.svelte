<script>
  import CreateStepForm from './CreateStepForm.svelte';
  import { createEventDispatcher } from 'svelte';

  export let show;
  export let enableUp;
  export let enableDown;
  export let enableDelete;
  export let step;
  export let index;
  export let ingredients;
  export let unitsOfMeasurement;

  $: toggleBtnText = show ? '-' : '+';

  const dispatch = createEventDispatcher();

  const addIngredient = e => {
    const newIngredient = {
      unitOfMeasurmentId: '',
      ingredientId: '',
      amount: '',
    };

    step.value.ingredients = [...step.value.ingredients, newIngredient];
  };

  const toggle = () => (show = !show);
</script>

<div class="bar">
  <h4 class="bar-item title">Step {index + 1}</h4>
  <div class="bar-item btns">
    {#if enableUp}
      <button on:click={() => dispatch('move-up', index)}>&uarr</button>
    {/if}
    {#if enableDown}
      <button on:click={() => dispatch('move-down', index)}>&darr</button>
    {/if}
    <button on:click={toggle}>{toggleBtnText}</button>
    <button on:click={() => dispatch('remove-step', index)} disabled={!enableDelete}>x</button>
  </div>
</div>
{#if show}
  <div class="bar-content">
    <CreateStepForm on:add-ingredient={addIngredient} {step} {ingredients} {unitsOfMeasurement} />
  </div>
{/if}

<style>
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid var(--color-primary); */
    border-radius: 25px;
    background-color: var(--color-accent);
    box-shadow: black;
    margin-top: 1vh;
  }

  .bar-item {
    margin: 1vh 10vw;
  }

  .title {
    color: var(--color-primary);
  }

  .btns {
    display: flex;
    justify-content: end;
    align-items: center;
  }
</style>
