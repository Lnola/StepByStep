<script>
  import { onMount } from 'svelte';
  import Filter from '@/components/common/Filter.svelte';
  import Recipes from './RecipesList.svelte';
  import { recipeApi, categoryApi } from '@/api';

  let category = 0;
  let recipes = [];
  let categories;
  let userRole = JSON.parse(localStorage.getItem('user')).role.name;
  const shouldDisplayBonusActions = userRole === 'admin' ? true : false;

  function updateCategory({ detail: { value } }) {
    category = value;
  }

  onMount(async () => {
    recipes = await recipeApi.fetchPublished();
    categories = await categoryApi.fetchAll();
  });

  const remove = async ({ detail: { id } }) => {
    if (!id) return alert('Delete failed, try again');
    await recipeApi.remove(id);
    recipes = await recipeApi.fetchPublished();
  };

  const updateIsPublished = async ({ detail: { id, isPublished } }) => {
    await recipeApi.updateIsPublished(id, isPublished);
    const recipe = recipes.find(recipe => recipe.id === id);
    recipe.isPublished = !recipe.isPublished;
    recipes = await recipeApi.fetchPublished();
  };
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {category} {shouldDisplayBonusActions} on:remove={remove} on:update={updateIsPublished} />
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
