<script>
  import Recipes from '../browseRecipes/Recipes.svelte';
  let recipes = [];

  /*
    algorithm to display featured recipes
    save featured recipes to field "recipes"
  */
</script>

<main>
  <div class="featured-text">
    <div class="text">Nemaš ideju?</div>
    <div class="text">Pogledaj najbolje ocijenjene recepte!</div>
  </div>
  <div class="featured-recipes">
    <Recipes {recipes} category={0} />
  </div>
</main>

<style>
  main {
    height: 100%;
  }

  .featured-recipes {
    padding-bottom: 30%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .featured-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  .text:nth-child(2) {
    font-weight: 800;
    font-size: larger;
  }

  .text {
    font-size: large;
    font-weight: 600;
    text-align: center;
  }
</style>
