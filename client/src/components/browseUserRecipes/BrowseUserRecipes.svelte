<script>
  import { onMount } from 'svelte';
  import Header from '@/components/layout/Header.svelte';
  import Navigation from '@/components/layout/Navigation.svelte';
  import Recipes from '@/components/browseUserRecipes/Recipes.svelte';
  import Filter from '@/components/common/Filter.svelte';
  import { recipesApi } from '@/api';

  let recipes = [];
  let isPublished;

  const categories = [
    { id: 1, name: 'Published' },
    { id: 2, name: 'Unpublished' },
  ];

  function updateCategory({ detail: { value } }) {
    if (value === 0) return (isPublished = undefined);
    isPublished = !(value - 1);
  }

  onMount(async () => {
    recipes = await recipesApi.fetchUserRecipes();
  });
</script>

<main>
  <Header />
  <Navigation />
  <Filter {categories} on:update={updateCategory} />
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
