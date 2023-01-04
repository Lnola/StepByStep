<script>
  import { createEventDispatcher } from 'svelte';
  import CreateStepsList from './CreateStepsList.svelte';

  export let categories;
  export let steps;

  const dispatch = createEventDispatcher();
</script>

<form class="form" on:submit|preventDefault={dispatch('create-recipe')}>
  <div class="item">
    <label for="name">Recipe name: </label>
    <input name="name" placeholder="recipe name" />
  </div>
  <div class="item">
    <label for="description">Recipe description: </label>
    <input type="textbox" name="description" />
  </div>
  <div class="item">
    <input type="radio" name="isPublished" value="false" />Private
    <input type="radio" name="isPublished" value="true" />Public
  </div>
  <div class="item">
    <select name="categoryId">
      <option selected disabled value="">Select category</option>
      {#each categories as category}
        <option value={category.id}>{category.name}</option>
      {/each}
    </select>
  </div>
  <div class="item" />
</form>
<CreateStepsList steps={steps} />

<style>
  .form {
    display: grid;
  }

  .item {
  }
</style>
