<script>
  export let category;
  export let recipes;
  import Card from '@/components/common/Card.svelte';
</script>

<main>
  <div class="recipes-container">
    {#each recipes as { name, categoryId, avgRating, preparationTime, imageUrl }}
      {#if category === categoryId || category === 0}
        <Card title={name} option1={avgRating} option2={preparationTime} cover={imageUrl} />
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
