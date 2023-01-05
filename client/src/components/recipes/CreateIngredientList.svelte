<script>
  import CreateIngredientItem from './CreateIngredientItem.svelte';

  export let ingredients;
</script>

<h6>Ingredients:</h6>
{#each ingredients as ingredient}
  <div>
    <CreateIngredientItem {ingredient} />
  </div>
{/each}
