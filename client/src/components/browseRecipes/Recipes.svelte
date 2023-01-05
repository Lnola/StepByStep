<script>
  import Card from '@/components/common/Card.svelte';

  export let category = null;
  export let published = null;
  export let recipes;
</script>

<main>
  <div class="recipes-container">
    {#each recipes as { name, isPublished, categoryId, avgRating, preparationTime, imageUrl }}
      {#if category === categoryId || category === 0 || published === isPublished || published === 0}
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
