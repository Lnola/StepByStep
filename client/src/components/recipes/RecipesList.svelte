<script>
  import Card from '@/components/common/Card.svelte';
  import { redirect } from '@/utils/router/routing';
  import { createEventDispatcher } from 'svelte';

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

  function viewRecipeRedirect(recipeId) {
    redirect('ViewRecipe', recipeId);
  }
</script>

<section>
  {#each recipes as { id, name, isPublished, categories, avgRating, preparationTime, imageUrl }}
    {#if isCategoryMatch(categories, category) || isPublishedMatch(isPublished, published)}
      <Card
        on:details={viewRecipeRedirect(id)}
        cover={imageUrl}
        title={name}
        rating={avgRating}
        time={preparationTime}
        {shouldDisplayBonusActions}
        {isPublished}
        on:remove={() => dispatch('remove', { id })}
        on:update={() => dispatch('update', { id, isPublished })}
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
