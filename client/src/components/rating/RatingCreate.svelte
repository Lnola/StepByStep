<script>
  import { ratingApi } from '@/api';
  import { onMount } from 'svelte';

  export let recipeId;
  let rating = 0;

  const rate = async value => {
    if (!!rating) return alert('Recipe already rated!');
    try {
      await ratingApi.create({ recipeId, value });
      rating = value;
    } catch {
      alert('There was an error rating. Try again!');
    }
  };

  const fetchUserRecipeRating = async () => {
    const data = await ratingApi.fetchByRecipe(recipeId);
    rating = data.value;
  };

  onMount(async () => {
    await fetchUserRecipeRating();
  });
</script>

<div class="container">
  <h3>Your rating for this recipe</h3>
  {#each Array(5) as _, i}
    <button on:click={() => rate(i)}>
      <i class="fa-{++i <= rating ? 'solid' : 'regular'} fa-star" />
    </button>
  {/each}
</div>

<style>
  .container {
    text-align: center;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    color: var(--color-primary);
  }
</style>
