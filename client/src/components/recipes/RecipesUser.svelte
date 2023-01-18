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

  onMount(async () => {
    recipes = await recipeApi.fetchByUser();
  });

  const remove = async ({ detail: { id } }) => {
    if (!id) return alert('Delete failed, try again');
    await recipeApi.remove(id);
    recipes = await recipeApi.fetchByUser();
  };

  const updateIsPublished = async ({ detail: { id, isPublished } }) => {
    await recipeApi.updateIsPublished(id, isPublished);
    const recipe = recipes.find(recipe => recipe.id === id);
    recipe.isPublished = !recipe.isPublished;
    recipes = [...recipes];
  };
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {published} {shouldDisplayBonusActions} on:remove={remove} on:update={updateIsPublished} />
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
