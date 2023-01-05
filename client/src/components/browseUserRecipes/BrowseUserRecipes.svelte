<script>
  import { onMount } from 'svelte';
  import Header from '@/components/layout/Header.svelte';
  import Navigation from '@/components/layout/Navigation.svelte';
  import Recipes from '@/components/browseUserRecipes/Recipes.svelte';
  import { recipesApi } from '@/api';
  import Category from '@/components/browseUserRecipes/Category.svelte';

  let recipes = [];
  let isPublished = undefined;

  function updateCategory({ detail: { value } }) {
    if (value === 1) {
      isPublished = true;
    } else if (value === 2) {
      isPublished = false;
    } else isPublished = undefined;
  }

  onMount(async () => {
    recipes = await recipesApi.fetchUserRecipes();
  });
</script>

<main>
  <Header />
  <Navigation />
  <Category on:update={updateCategory} />
  <Recipes {recipes} {isPublished} />
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
