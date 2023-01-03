<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Header from '../header/Header.svelte';
  import Navigation from '../navigation/Navigation.svelte';
  import Category from './Category.svelte';
  import Recipes from './Recipes.svelte';
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
