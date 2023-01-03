<script>
  import { slide, blur } from 'svelte/transition';
  export let recipe;
  export let rating;

  let extended = false;
  function toggleExtended() {
    extended = !extended
  }
</script>

<ignore style="display: none;">
  <div class="info extend" />
  <div class="rating extend" />
</ignore>

<main>
  <div class="container" in:slide={{ delay: 700 }} out:blur>
    <div class="title">{recipe.name}</div>
    <div class="circle info {extended && 'extend'}"><button on:click={toggleExtended}>ℹ️</button></div>
    <div class="circle rating {extended && 'extend'}">{rating}/5</div>
    <div class="circle time {extended && 'extend'}">
      <p>20</p>
      <p>min</p>
    </div>
  </div>
</main>

<style>
  .container {
    background-color: #4b124b;
    position: relative;
    z-index: 0;
    overflow: hidden;
    margin-top: 10%;
    height: 25vh;
    width: 85vw;
    border-radius: 15px;
  }
  .title {
    padding: 3%;
    position: absolute;
    z-index: 1;
    background-color: #ebf2af;
    font-weight: 600;
    font-size: large;
    color: #4b124b;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-left: 0.5vh solid #ebf2af;
    top: 7%;
    right: 0%;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #ebf2af;
    bottom: 4%;
    left: 4%;
    border-radius: 50%;
    height: 6vh;
    width: 6vh;
    transition: 0.5s;
    font-size: medium;
    font-weight: 800;
  }

  .info {
    z-index: 2;
  }
  .rating {
    z-index: 1;
    overflow: hidden;
  }
  .time {
    display: flex;
    flex-direction: column;
    z-index: 0;
    font-size: medium;
    overflow: hidden;
  }
  .time p {
    height: min-content;
    margin: -15%;
    padding: 0;
  }

  .info.extend {
    transform: translateX(240%);
  }
  .rating.extend {
    transform: translateX(120%);
  }

  .info button {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    font-size: larger;
    font-weight: 600;
  }
</style>
