<script>
  import { onMount } from 'svelte';
  import Filter from '@/components/common/Filter.svelte';
  import Recipes from './RecipesList.svelte';
  import { recipeApi, categoryApi } from '@/api';
  import { isAdmin } from '@/stores/auth';

  let category = 0;
  let recipes = [];
  let categories;
  const shouldDisplayBonusActions = isAdmin();

  function updateCategory({ detail: { value } }) {
    category = value;
  }

  const fetchRecipesAndCategories = async () => {
    recipes = await recipeApi.fetchPublished();
    categories = await categoryApi.fetchAll();
  };

  onMount(async () => {
    await fetchRecipesAndCategories();
  });
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {category} {shouldDisplayBonusActions} on:refetch={() => fetchRecipesAndCategories()} />
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
