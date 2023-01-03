<script>
  import { ratingsApi } from '@/api';
  import { onMount } from 'svelte';
  export let category;
  export let recipes;
  import Card from '@/components/common/Card.svelte';

  let ratingsList = [];
  onMount(async () => {
    ratingsList = await ratingsApi.fetchAll();
  });
</script>

<main>
  <div class="recipes-container">
    {#each recipes as recipe}
      {#each ratingsList as rating}
        {#if rating.recipeId == recipe.id}
          {#if category == 0}
            <Card {recipe} rating={rating.value} />
          {:else if category == recipe.categoryId}
            <Card {recipe} rating={rating.value} />
          {/if}
        {/if}
      {/each}
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
