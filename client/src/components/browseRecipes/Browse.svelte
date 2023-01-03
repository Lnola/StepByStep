<script>
  import { onMount } from 'svelte';
  import Header from '@/components/header/Header.svelte';
  import Navigation from '@/components/navigation/Navigation.svelte';
  import Category from '@/components/browseRecipes/Category.svelte';
  import Recipes from '@/components/browseRecipes/Recipes.svelte';
  import recipesApi from '@/api/recipes';

  let categoryId = 0;
  function handleCategoryToggle(event) {
    categoryId = event.detail.value;
  }
  let recipes = [];
  onMount(async () => {
    recipes = await recipesApi.fetchAll();
  });
</script>

<main>
  <Header />
  <Navigation />
  <Category on:categoryToggle={handleCategoryToggle} />
  <Recipes {recipes} category={categoryId} />
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
