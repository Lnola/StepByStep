<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import { createEventDispatcher } from 'svelte';
  import TimeInput from '../common/TimeInput.svelte';
  import settings from '@/settings/settings.json';

  export let step;
  export let ingredients;
  export let unitsOfMeasurement;

  const dispatch = createEventDispatcher();
</script>

<fieldset class="fieldset">
  <legend>Description</legend>
  <textarea
    class="input"
    rows="3"
    name="description"
    placeholder="Describe this step."
    bind:value={step.description}
    minlength={settings.minLength.description}
    required
></textarea>
</fieldset>

<TimeInput bind:time={step.time} />

<CreateIngredientList stepIngredients={step.ingredients} {ingredients} {unitsOfMeasurement} />

<button class="item" on:click={() => dispatch('add-ingredient', step)}>Add ingredient</button>

<style>
  .fieldset {
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
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
  }

  .input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
</style>
