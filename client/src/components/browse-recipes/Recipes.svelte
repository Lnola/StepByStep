<script>
  export let category;
  export let recipes;

  import Card from '../cards/Card.svelte';
</script>

<main>
  <div class="recipes-container">
    {#each recipes as recipe, id}
      {#if category == 0}
        <Card {recipe} />
      {:else if category == recipe.categoryId}
        <Card {recipe} />
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    height: 100%;
  }

  .recipes-container {
    padding-bottom: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
