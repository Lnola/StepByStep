<script>
  import { onMount } from 'svelte';
  import Recipes from './RecipesList.svelte';
  import Filter from '@/components/common/Filter.svelte';
  import { recipeApi } from '@/api';

  let recipes = [];
  let published = 0;
  const shouldDisplayBonusActions = true;

  const categories = [
    { id: 1, name: 'Published' },
    { id: 2, name: 'Unpublished' },
  ];

  function updateCategory({ detail: { value } }) {
    if (value === 0) return (published = 0);
    published = !(value - 1);
  }

  const fetchRecipes = async () => {
    recipes = await recipeApi.fetchByUser();
  };

  onMount(async () => {
    await fetchRecipes();
  });
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {published} {shouldDisplayBonusActions} on:refetch={() => fetchRecipes()} />
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
