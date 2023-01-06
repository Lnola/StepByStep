<script>
  import Card from '@/components/common/Card.svelte';

  export let category = null;
  export let published = null;
  export let recipes;
</script>

<section>
  {#each recipes as { name, isPublished, categoryId, avgRating, preparationTime, imageUrl }}
    {#if category === categoryId || category === 0 || published === isPublished || published === 0}
      <Card cover={imageUrl} title={name} rating={avgRating} time={preparationTime} />
    {/if}
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30%;
  }
</style>
