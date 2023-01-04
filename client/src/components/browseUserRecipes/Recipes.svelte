<script>
  export let publishedBool;
  export let recipes;
  import Card from '@/components/common/Card.svelte';
</script>

<main>
  <div class="recipes-container">
    {#each recipes as { name, isPublished, avgRating, preparationTime }}
      {#if publishedBool === isPublished || publishedBool === undefined}
        <Card title={name} option1={avgRating} option2={preparationTime} />
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
