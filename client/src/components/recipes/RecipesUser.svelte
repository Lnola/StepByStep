<script>
  import { onMount } from 'svelte';
  import Recipes from './RecipesList.svelte';
  import Filter from '@/components/common/Filter.svelte';
  import { recipeApi } from '@/api';

  let recipes = [];
  let published = 0;
  const deletable = true;

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
    if (id) {
      await recipeApi.remove(id);
      recipes = await recipeApi.fetchByUser();
    }
  };
</script>

<main>
  <Filter {categories} on:update={updateCategory} />
  <Recipes {recipes} {published} {deletable} on:click={remove} />
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
