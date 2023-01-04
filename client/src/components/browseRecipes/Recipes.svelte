<script>
  export let category;
  export let recipes;
  import Card from '@/components/common/Card.svelte';
</script>

<main>
  <div class="recipes-container">
    {#each recipes as { name, categoryId, avgRating, preparationTime, imageurl }}
      {#if category === categoryId || category === 0}
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
