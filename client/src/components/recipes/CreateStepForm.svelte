<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import TimeInput from '../common/TimeInput.svelte';
  import Validation from '../common/Validation.svelte';
  import settings from '@/settings/settings.json';

  export let step;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<div class="bar-content">
  <fieldset class="fieldset">
    <legend>{step.description.label}</legend>
    <textarea bind:value={step.description.value} class="input" placeholder={step.description.placeholder} />
    <Validation
      bind:value={step.description.value}
      on:valid={({ detail }) => (step.description.valid = detail.valid)}
      validators={step.description.validators}
    />
  </fieldset>

  <TimeInput
    bind:value={step.time.value}
    on:valid={({ detail }) => (step.time.valid = detail.valid)}
    label={step.time.label}
  />

  <CreateIngredientList
    bind:stepIngredients={step.ingredients.value}
    selector={step.ingredients.selector}
    {ingredients}
    {unitsOfMeasurement}
  />
  <Validation
    bind:value={step.ingredients.value}
    on:valid={({ detail }) => (step.ingredients.valid = detail.valid)}
    validators={step.ingredients.validators}
  />
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }

  .input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
</style>
