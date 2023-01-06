<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import { createEventDispatcher } from 'svelte';

  export let step;
  export let ingredients;
  export let unitsOfMeasurement;

  const dispatch = createEventDispatcher();
</script>

<label class="item" for="description">Description: </label>
<input class="item" name="description" placeholder="step description" bind:value={step.description}/>
<label class="item" for="time">Time: </label>
<input class="item" name="time" placeholder="step time" bind:value={step.time}/>
<CreateIngredientList stepIngredients={step.ingredients} {ingredients} {unitsOfMeasurement} />
<button class="item" on:click={() => dispatch('add-ingredient', step)}>Add ingredient</button>

<style>
  .item {
    display: block;
  }
</style>
