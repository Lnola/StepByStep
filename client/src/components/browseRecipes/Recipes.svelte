<script>
  import ratings from '@/api/ratings';
  import { onMount } from 'svelte';
  import { each } from 'svelte/internal';
  export let category;
  export let recipes;
  import Card from '../common/Card.svelte';

  let ratingsList = [];
  onMount(async () => {
    ratingsList = await ratings.list();
  });
</script>

<main>
  <div class="recipes-container">
    {#each recipes as recipe}
      {#each ratingsList as rating}
        {#if rating.recipeId == recipe.id}
          {#if category == 0}
            <Card {recipe} {rating} />
          {:else if category == recipe.categoryId}
            <Card {recipe} {rating} />
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
