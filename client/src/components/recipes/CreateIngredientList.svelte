<script>
  import CreateIngredientItem from './CreateIngredientItem.svelte';

  export let stepIngredients;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<h6>Ingredients:</h6>
{#each stepIngredients as ingredient}
  <div>
    <CreateIngredientItem {ingredient} {ingredients} {unitsOfMeasurement} />
  </div>
{/each}
