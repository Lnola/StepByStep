<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import Modal from '../common/Modal.svelte';

  let recipe;
  let steps = [];
  let name;
  let description;
  let cover;
  let rating;
  let prepTime;
  let showModal = false;
  let step;
  let counter = 0;

  onMount(async () => {
    let path = window.location.pathname;
    let recipeId = path.substring(path.lastIndexOf('/') + 1);
    recipe = await recipeApi.showRecipe(recipeId);
    steps = await recipeApi.fetchStepsByRecipeId(recipeId);
    if (steps.length > 0) {
      step = steps[0];
    }
    name = recipe.name;
    description = recipe.description;
    cover = recipe.imageUrl;
    rating = recipe.avgRating;
    prepTime = recipe.preparationTime;

    console.log(steps);
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
  <div class="title">{name}</div>
  <div class="container">
    <div class="time fas fa-clock">{prepTime} min</div>
    <div class="rating fa fa-star">{rating}</div>
  </div>
  <div class="description">{description}</div>

  {#if showModal && steps.length > 0}
    <Modal on:close={() => (showModal = false)}>
      <h2 class="modal-fields">{counter + 1}. korak</h2>
      <div class="modal-fields">{step.description}</div>
      <div class="modal-fields">{step.time}</div>
      {#each step.stepIngredients as stepIngerdient}
        <div class="modal-fields">
          {stepIngerdient.ingredient.name}
          {stepIngerdient.amount}
          {stepIngerdient.unitOfMeasurement.abbreviation}
        </div>
      {/each}
      <div class="modal-buttons">
        <button class="button-style fas fa-arrow-left" on:click={prevStep} />
        <button class="button-style fas fa-arrow-right" on:click={nextStep} />
      </div>
    </Modal>
  {/if}
  {#if showModal && steps.length == 0}
    <Modal on:close={() => (showModal = false)}>
      <h2 style="text-align:center">Koraci nisu dodani za ovaj recept!</h2>
    </Modal>
  {/if}
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
    width: 100%;
    padding-bottom: 10px;
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
    color: var(--color-accent);
    border: solid var(--color-accent) 2px;
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
</style>
