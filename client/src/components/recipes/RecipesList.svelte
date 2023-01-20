<script>
  import Card from '@/components/common/Card.svelte';
  import { createEventDispatcher } from 'svelte';
  import { recipeApi } from '@/api';

  export let category = null;
  export let published = null;
  export let recipes;
  export let shouldDisplayBonusActions;

  const dispatch = createEventDispatcher();

  const isCategoryMatch = (categories, category) => {
    const categoryIds = categories.map(({ id }) => id);
    const doCategoriesMatch = categoryIds.includes(category);
    const isCategoryNotSelected = category === 0;
    return doCategoriesMatch || isCategoryNotSelected;
  };

  const isPublishedMatch = (isPublished, published) => {
    const doPublishedMatch = published === isPublished;
    const isPublishedNotSelected = published === 0;
    return doPublishedMatch || isPublishedNotSelected;
  };

  const remove = async id => {
    if (!id) return alert('Delete failed, try again');
    await recipeApi.remove(id);
    dispatch('refetch');
  };

  const updateIsPublished = async (id, isPublished) => {
    await recipeApi.updateIsPublished(id, isPublished);
    const recipe = recipes.find(recipe => recipe.id === id);
    recipe.isPublished = !recipe.isPublished;
    recipes = [...recipes];
  };
</script>

<section>
  {#each recipes as { id, name, isPublished, categories, avgRating, preparationTime, imageUrl }}
    {#if isCategoryMatch(categories, category) || isPublishedMatch(isPublished, published)}
      <Card
        cover={imageUrl}
        title={name}
        rating={avgRating}
        time={preparationTime}
        {shouldDisplayBonusActions}
        {isPublished}
        on:remove={remove(id)}
        on:update={updateIsPublished(id, isPublished)}
      />
    {/if}
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30%;
  }
</style>
