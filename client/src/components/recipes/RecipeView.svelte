<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import RecipeViewModal from './RecipeViewModal.svelte';
  import CommentList from '../comments/CommentList.svelte';

  const { pathname } = location;
  const recipeId = pathname.substring(pathname.lastIndexOf('/') + 1);

  let steps = [];
  let recipe;
  let name;
  let description;
  let cover;
  let rating;
  let prepTime;
  let showModal = false;
  let step;
  let counter = 0;
  let totalIngredients = [];
  let holderIngredient = {};
  let holderMeassure = {};
  let obj2 = [];

  onMount(async () => {
    recipe = await recipeApi.fetchById(recipeId);
    steps = await recipeApi.fetchStepsByRecipeId(recipeId);
    if (steps.length > 0) {
      steps.forEach(e => {
        totalIngredients = totalIngredients.concat(e.stepIngredients);
      });

      totalIngredients.forEach(function (d) {
        if (holderIngredient.hasOwnProperty(d.ingredient.name)) {
          holderIngredient[d.ingredient.name] = holderIngredient[d.ingredient.name] + d.amount;
        } else {
          holderIngredient[d.ingredient.name] = d.amount;
          holderMeassure[d.ingredient.name] = d.unitOfMeasurement.abbreviation;
        }
      });

      for (let prop in holderIngredient) {
        obj2.push({ name: prop, value: holderIngredient[prop], unitOfMeassure: holderMeassure[prop] });
        obj2 = obj2;
      }

      step = steps[0];
    }
    name = recipe.name;
    description = recipe.description;
    cover = recipe.imageUrl;
    rating = recipe.avgRating;
    prepTime = recipe.preparationTime;
  });

  function prevStep() {
    if (counter > 0) {
      counter--;
    }
    step = steps[counter];
  }

  function nextStep() {
    if (counter < steps.length - 1) {
      counter++;
    }
    step = steps[counter];
  }
</script>

<main>
  <div class="cover">
    <img alt="recipeCover" src={cover} />
    <button class="play-button fas fa-play" on:click={() => (showModal = true)} />
  </div>
  <section class="wrapper">
    <div class="title">{name}</div>
    <div class="container">
      <div class="time fas fa-clock">&nbsp; {prepTime} min</div>
      <div class="rating fa fa-star">&nbsp; {rating}</div>
    </div>
    <div class="resources">
      <div class="resources-title">SASTOJCI</div>
      {#each obj2 as r}
        <div>
          {r.name}
          {r.value}
          {r.unitOfMeassure}
        </div>
      {/each}
    </div>
    <div class="description">{description}</div>
  </section>
  {#if showModal && steps.length > 0}
    <RecipeViewModal on:close={() => (showModal = false)}>
      <h3 class="modal-fields">{counter + 1}. korak</h3>
      <div class="modal-fields">{step.time}</div>
      {#each step.stepIngredients as stepIngerdient}
        <div class="modal-fields">
          {stepIngerdient.ingredient.name}
          {stepIngerdient.amount}
          {stepIngerdient.unitOfMeasurement.abbreviation}
        </div>
      {/each}
      <div class="modal-fields">{step.description}</div>
      <div class="modal-buttons">
        <button class="button-style fas fa-arrow-left" on:click={prevStep} />
        <button class="button-style fas fa-arrow-right" on:click={nextStep} />
      </div>
    </RecipeViewModal>
  {/if}
  {#if showModal && steps.length == 0}
    <RecipeViewModal on:close={() => (showModal = false)}>
      <h2 style="text-align:center">Koraci nisu dodani za ovaj recept!</h2>
    </RecipeViewModal>
  {/if}

  <CommentList {recipeId} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8vh 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .wrapper {
    padding: 0 24px;
  }

  .container {
    display: flex;
    justify-content: space-around;
    width: 100%;
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
    margin: 20px 0;
  }

  .play-button {
    width: 100%;
    height: 75px;
    color: var(--color-accent);
    border: none;
    border-top: solid var(--color-accent) 2px;
    border-bottom: solid var(--color-accent) 2px;
    background-color: var(--color-primary);
  }

  .play-button:hover {
    background-color: var(--color-secondary);
  }

  .modal-fields {
    text-align: center;
  }

  .modal-buttons {
    display: flex;
    justify-content: space-between;
  }

  .button-style {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: var(--color-accent);
    border: solid var(--color-accent) 1px;
    background-color: var(--color-primary);
  }

  .button-style:hover {
    background-color: var(--color-secondary);
  }

  .resources {
    width: 100%;
    height: auto;
    text-align: center;
    justify-content: center;
    padding: 5px;
    font-size: 14pt;
    margin-top: 28px;
    margin-bottom: 20px;
  }

  .resources-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
