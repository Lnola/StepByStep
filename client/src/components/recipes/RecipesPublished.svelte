<script>
  import { onMount } from 'svelte';
  import Filter from '@/components/common/Filter.svelte';
  import Recipes from './RecipesList.svelte';
  import { recipesApi, categoriesApi } from '@/api';

  let category = 0;
  let recipes = [];
  let categories;
  const deletable = false;

  function updateCategory({ detail: { value } }) {
    category = value;
  }

  onMount(async () => {
    recipes = await recipesApi.fetchPublished();
    categories = await categoriesApi.fetchAll();
  });
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {category} {deletable} />
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
