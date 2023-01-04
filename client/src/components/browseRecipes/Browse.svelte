<script>
  import { onMount } from 'svelte';
  import Header from '@/components/layout/Header.svelte';
  import Navigation from '@/components/layout/Navigation.svelte';
  import Category from '@/components/browseRecipes/Category.svelte';
  import Recipes from '@/components/browseRecipes/Recipes.svelte';
  import { recipesApi } from '@/api';

  let category = 0;
  let recipes = [];

  function handleCategoryToggle({ detail: { value } }) {
    category = +value;
  }

  onMount(async () => {
    recipes = await recipesApi.fetchAll();
  });
</script>

<main>
  <Header />
  <Navigation />
  <Category on:categoryToggle={handleCategoryToggle} />
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
