<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import { createEventDispatcher } from 'svelte';
  import TimeInput from '../common/TimeInput.svelte';
  import Validation from '../common/Validation.svelte';

  export let step;
  export let ingredients;
  export let unitsOfMeasurement;

  console.log(step);

  const dispatch = createEventDispatcher();
</script>

<div class="bar-content">
  <fieldset class="fieldset">
    <legend>{step.description.label}</legend>
    <textarea
      bind:value={step.description.value}
      class="input"
      rows="3"
      name="description"
      placeholder={step.description.placeholder}
    />
    <Validation
      bind:value={step.description.value}
      validators={step.description.validators}
    />
  </fieldset>

  <TimeInput bind:value={step.time.value} on:valid={({ detail }) => (step.time.valid = detail.valid)} label={step.time.label} />
  
  <!-- <CreateIngredientList stepIngredients={step.ingredients} {ingredients} {unitsOfMeasurement} /> -->

  <button class="item" on:click={() => dispatch('add-ingredient', step)}>Add ingredient</button>
</div>

<style>
  .bar-content {
    max-width: 17rem;
    background-color: var(--color-primary);
    border: 3px solid var(--color-accent);
    border-top: none;
    text-align: center;
    margin: 0 auto 1vh auto;
    padding: 5%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .fieldset {
    border: 2px solid var(--color-accent);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    margin-top: 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }

  .input {
    width: 100%;
    resize: vertical;
    min-height: 3vh;
    max-height: fit-content;
    border: none;
    outline: none;
    background-color: var(--color-primary);
  }

  .input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }

  .error-input {
    border-color: var(--color-error);
  }
</style>
