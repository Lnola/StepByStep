<script>
  import { createEventDispatcher } from 'svelte';
  import CreateStepsList from './CreateStepsList.svelte';

  export let categories;
  export let steps;

  const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault={dispatch('create-recipe')}>
  <label class="item" for="name">Recipe name: </label>
  <input class="item" name="name" placeholder="recipe name" />
  <label class="item" for="description">Recipe description: </label>
  <input class="item" type="textbox" name="description" />
  <div class="item">
    <input type="radio" name="isPublished" value="false" checked />Private
    <input type="radio" name="isPublished" value="true" />Public
  </div>
  <select class="item" name="categoryId">
    <option selected disabled value="">Select category</option>
    {#each categories as category}
      <option value={category.id}>{category.name}</option>
    {/each}
  </select>
  <CreateStepsList on:add-step {steps} />
  <button class="item" type="submit">Create Recipe</button>
</form>

<style>
  .item {
    display: block;
  }
</style>
