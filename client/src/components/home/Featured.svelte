<script>
  import Recipes from '@/components/recipes/RecipesList.svelte';
  let recipes = [];

  /*
    algorithm to display featured recipes
    save featured recipes to field "recipes"
  */
</script>

<section class="container">
  <div class="header">
    <p class="text">Nemaš ideju?</p>
    <p class="text">Pogledaj najbolje ocijenjene recepte!</p>
  </div>
  <div class="content">
    <Recipes {recipes} category={0} />
  </div>
</section>

<style>
  .container {
    height: 100%;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  .text {
    margin: 0;
    font-size: large;
    font-weight: 600;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    padding-bottom: 30%;
  }
</style>
