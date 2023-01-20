<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import RecipeViewModal from './RecipeViewModal.svelte';

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
  var x;

  onMount(async () => {
    let path = window.location.pathname;
    let recipeId = path.substring(path.lastIndexOf('/') + 1);
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

    var countDownDate = new Date(new Date().getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000);

    x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
    timer();
  }

  function nextStep() {
    if (counter < steps.length - 1) {
      counter++;
    }
    step = steps[counter];
    timeArray = step.time.split(':');
    clearInterval(x);
    timer();
  }
</script>

<main>
  <div class="cover">
    <img alt="recipeCover" src={cover} />
    <button
      class="play-button fas fa-play"
      on:click={() => {
        showModal = true;
        clearInterval(x);
        timer();
      }}
    />
  </div>
  <div class="title">{name}</div>
  <div class="container">
    <div class="time fas fa-clock">&nbsp; {prepTime} min</div>
    <div class="rating fa fa-star">&nbsp; {rating}</div>
  </div>
  <div class="resources">
    <div class="resourcesTitle">INGREDIENTS</div>
    {#each obj2 as r}
      <div>
        {r.name}
        {r.value}
        {r.unitOfMeassure}
      </div>
    {/each}
  </div>
  <div class="description">{description}</div>

  {#if showModal && steps.length > 0}
    <RecipeViewModal
      on:close={() => {
        showModal = false;
        clearInterval(x);
      }}
    >
      <h3 class="modal-fields">{counter + 1}. step</h3>
      <div class="modal-fields"><span id="timer" /></div>
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
    <RecipeViewModal
      on:close={() => {
        showModal = false;
        clearInterval(x);
      }}
    >
      <h2 style="text-align:center">Steps have not been added for this recipe!</h2>
    </RecipeViewModal>
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
    padding-top: 20px;
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
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .resourcesTitle {
    font-size: 17pt;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
  }
</style>
