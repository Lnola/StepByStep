<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import { redirect } from '@/utils/router/routing';

  let recipe;
  let name;
  let description;
  let cover;
  let rating;
  let prepTime;

  onMount(async () => {
    let path = window.location.pathname;
    let recipeId = path.substring(path.lastIndexOf('/') + 1);
    recipe = await recipeApi.showRecipe(recipeId);
    name = recipe.name;
    description = recipe.description;
    cover = recipe.imageUrl;
    rating = recipe.avgRating;
    prepTime = recipe.preparationTime;
  });

  function reproduction() {
    // window.location = '/recipes/show-recipe/' + recipeId;
  }
</script>

<main>
  <div class="cover">
    <img alt="recipeCover" src={cover} />
    <button class="play-button fa-solid fa-play" on:click={reproduction} />
  </div>
  <div class="title">{name}</div>
  <div class="container">
    <div class="time">{prepTime}min</div>
    <div class="rating">{rating}</div>
  </div>
  <div class="description">{description}</div>
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

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .container {
    display: flex;
    justify-content: space-around;
    flex-direction: auto auto;
  }

  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .description {
    text-align: justify;
    font-size: medium;
    padding-left: 7px;
    padding-right: 7px;
  }

  .play-button {
    width: 100%;
    height: 75px;
    border: solid var(--color-accent) 2px;
    background-color: var(--color-primary);
  }

  .play-button:hover {
    background-color: var(--color-secondary);
  }
</style>
