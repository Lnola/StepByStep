<script>
  import CreateIngredientList from './CreateIngredientList.svelte';
  import { createEventDispatcher } from 'svelte';

  export let step;

  const dispatch = createEventDispatcher();
</script>

<label class="item" for="description">Description: </label>
<input class="item" name="description" value={step.description} placeholder="Step description" />
<label class="item" for="time">Time: </label>
<input class="item" name="time" value={step.time} placeholder="Step time" />
<CreateIngredientList ingredients={step.ingredients} />
<button class="item" on:click={() => dispatch('add-ingredient', step)}>Add Ingredient</button>

<style>
  .item {
    display: block;
  }
</style>
