<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import RecipeViewModal from './RecipeViewModal.svelte';
  import CommentList from '../comments/CommentList.svelte';
  import RatingCreate from '../rating/RatingCreate.svelte';

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
  let timeArray = [];
  let x;
  let shouldTimerStart = false;

  const startTimer = () => {
    shouldTimerStart = true;
    timer();
  };

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
    timeArray = step.time.split(':');
  });

  function timer() {
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]) + 2;

    let countDownDate = new Date(new Date().getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000);

    x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('timer').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }

  function prevStep() {
    if (counter > 0) {
      counter--;
    }
    step = steps[counter];
    timeArray = step.time.split(':');
    clearInterval(x);
    shouldTimerStart = false;
  }

  function nextStep() {
    if (counter < steps.length - 1) {
      counter++;
    }
    step = steps[counter];
    timeArray = step.time.split(':');
    clearInterval(x);
    shouldTimerStart = false;
  }
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  var supportsPassive = false;
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        },
      }),
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
</script>

<main>
  <div class="cover">
    <img alt="recipeCover" src={cover} />
    <button
      class="play-button fas fa-play"
      on:click={() => {
        disableScroll();
        showModal = true;
        clearInterval(x);
        shouldTimerStart = false;
      }}
    />
  </div>
  <section class="wrapper">
    <div class="title">{name}</div>
    <div class="container">
      <div class="time fas fa-clock">&nbsp; {prepTime} min</div>
      <div class="rating fa fa-star">&nbsp; {rating}</div>
    </div>
    <div class="resources">
      <div class="resources-title">INGREDIENTS</div>
      {#each obj2 as r}
        <div>
          {r.name}
          {r.value}
          {r.unitOfMeassure}
        </div>
      {/each}
    </div>
    <div class="resources resources-title">DESCRIPTION</div>
    <div class="description">{description}</div>
  </section>
  {#if showModal && steps.length > 0}
    <RecipeViewModal
      on:close={() => {
        enableScroll();
        showModal = false;
        clearInterval(x);
      }}
    >
      <h3 class="modal-fields">{counter + 1}. step</h3>
      <div class="modal-fields" style="padding-bottom: 20px;">
        {#if shouldTimerStart}
          <span id="timer" />
        {:else}
          <button on:click={startTimer} class="start-button">Start timer</button>
        {/if}
      </div>
      <div class="modal-title">Ingredients</div>
      {#each step.stepIngredients as stepIngerdient}
        <div class="modal-fields">
          {stepIngerdient.ingredient.name}
          {stepIngerdient.amount}
          {stepIngerdient.unitOfMeasurement.abbreviation}
        </div>
      {/each}
      <div class="modal-title">Description</div>
      <div class="modal-fields step-description">{step.description}</div>
      <div class="modal-buttons">
        <button class="button-style fas fa-arrow-left" on:click={prevStep} />
        <button class="button-style fas fa-arrow-right" on:click={nextStep} />
      </div>
    </RecipeViewModal>
  {/if}
  {#if showModal && steps.length == 0}
    <RecipeViewModal
      on:close={() => {
        showModal = false;
        clearInterval(x);
      }}
    >
      <h2 style="text-align:center">Steps have not been added for this recipe!</h2>
    </RecipeViewModal>
  {/if}

  <RatingCreate {recipeId} />
  <CommentList {recipeId} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8vh 0 16vh 0;
    overflow-y: auto;
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

  .start-button {
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 1.25rem;
  }

  #timer {
    font-size: 1.5rem;
  }

  .modal-title {
    text-align: center;
    font-weight: bold;
    font-size: 14pt;
    padding: 15px;
  }

  .step-description {
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
