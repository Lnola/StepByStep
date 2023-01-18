<script>
  import { createEventDispatcher } from "svelte/internal";

  export let categories;

  const handleRemoveCategory = e => {
    dispatch('remove-category', e);
  }

  const dispatch = createEventDispatcher();

  $: categories = categories;
</script>

<div class="categories">
  {#if categories.length === 0}
    <span>No category is selected</span>
  {/if}
  {#each categories as category}
    <div class="category">
      <span class="item">{category.text}</span>
      <button class="item btn" value={category.id} on:click={handleRemoveCategory}>x</button>
    </div>
  {/each}
</div>

<style>
  .categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    max-width: 100%;
  }

  .category {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1vh 1vw;
    padding: 0;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .item {
    margin: 0vh 3vw;
  }

  .btn {
    position: relative;
    top: 0.1vh;
    right: 0.1vw;
    width: 4vw;
    height: 4vw;
    padding: 0;
    margin: 0;
    font-size: xx-small;
  }
</style>
