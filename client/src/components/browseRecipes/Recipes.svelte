<script>
  export let categoryId;
  export let recipes;
  import Card from '@/components/common/Card.svelte';
</script>

<main>
  <div class="recipes-container">
    {#each recipes as { name, id, avgRating, preparationTime, imageurl }}
      {#if categoryId === id || categoryId === 0}
        <Card title={name} option1={avgRating} option2={preparationTime} cover={imageurl} />
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
