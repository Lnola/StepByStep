<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import { createEventDispatcher } from 'svelte';
  import settings from '@/settings/settings.json';

  export let step;
  export let ingredients;
  export let unitsOfMeasurement;

  const dispatch = createEventDispatcher();
</script>

<label class="item" for="description">Description: </label>
<input
  class="item"
  name="description"
  placeholder="Step description"
  bind:value={step.description}
  minlength={settings.minLength.description}
  required
/>
<label class="item" for="time">Time: </label>
<input class="item" type="time" step="1" name="time" placeholder="Step time" bind:value={step.time} required />
<CreateIngredientList stepIngredients={step.ingredients} {ingredients} {unitsOfMeasurement} />
<button class="item" on:click={() => dispatch('add-ingredient', step)}>Add ingredient</button>

<style>
  .item {
    display: block;
    outline: none;
  }
</style>
