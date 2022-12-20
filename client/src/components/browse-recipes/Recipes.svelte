<script>
  export let category;
  import recipesApi from '@/api/recipesApi';
  import { onMount } from 'svelte';
  import Card from '../cards/Card.svelte';
  let recipes = [];
  onMount(async () => {
    recipes = await recipesApi.browse();
  });
</script>

<main name="recipes">
  <div class="recipes-container">
    {#each recipes as recipe, id}
      {#if category == 0}
        <Card {recipe} />
      {:else if category == recipe.categoryId}
        <Card {recipe}/>
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
