<script>
  import { onMount } from 'svelte';
  import Header from '@/components/layout/Header.svelte';
  import Navigation from '@/components/layout/Navigation.svelte';
  import Filter from '@/components/common/Filter.svelte';
  import Recipes from './RecipesList.svelte';
  import { recipesApi, categoriesApi } from '@/api';

  let category = 0;
  let recipes = [];
  let categories;

  function updateCategory({ detail: { value } }) {
    category = value;
  }

  onMount(async () => {
    recipes = await recipesApi.fetchPublished();
    categories = await categoriesApi.fetchAll();
  });
</script>

<main>
  <Header />
  <Navigation />
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {category} />
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
