<script>
  import { onMount } from 'svelte';
  import Recipes from './RecipesList.svelte';
  import Filter from '@/components/common/Filter.svelte';
  import { recipesApi } from '@/api';

  let recipes = [];
  let published = 0;

  const categories = [
    { id: 1, name: 'Published' },
    { id: 2, name: 'Unpublished' },
  ];

  function updateCategory({ detail: { value } }) {
    if (value === 0) return (published = 0);
    published = !(value - 1);
  }

  onMount(async () => {
    recipes = await recipesApi.fetchUserRecipes();
  });
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {published} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 84vh;
    margin-top: 8vh;
    margin-bottom: 8vh;
  }
</style>
