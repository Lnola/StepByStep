<script>
  import { createEventDispatcher } from 'svelte';
  import CreateStepsList from './CreateStepsList.svelte';

  export let categories;
  export let steps;

  const dispatch = createEventDispatcher();
</script>

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
<CreateStepsList on:add-step on:move-up on:move-down {steps} />
<button class="item" on:click={() => dispatch('create-recipe')}>Create Recipe</button>

<style>
  .item {
    display: block;
  }
</style>
