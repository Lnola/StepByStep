<script>
  import { ingredientsApi, unitsOfMeasurementApi } from '@/api';
  import { onMount } from 'svelte';

  export let ingredient;

  let ingredients = [];
  let unitsOfMeasurement = [];

  onMount(async () => {
    // TODO: currently, if fetch fails, ingredients and units are set to [], but in the future this should inform user about error! (same story as categories)
    ingredients = await ingredientsApi.fetchAll().catch(() => []);
    unitsOfMeasurement = await unitsOfMeasurementApi.fetchAll().catch(() => []);
  });
</script>

<select class="item" name="ingredientId">
  <option selected disabled value="">Select Ingredient</option>
  {#each ingredients as ingredient_}
    <option value={ingredient_.id}>{ingredient_.name}</option>
  {/each}
</select>
<input class="item" type="text" name="amount" placeholder="amount" value={ingredient.amount} />
<select class="item" name="unitOfMeasurementId">
  <option selected disabled value="">Select Unit Of Measurement</option>
  {#each unitsOfMeasurement as unitOfMeasurement}
    <option value={unitOfMeasurement.id}>{unitOfMeasurement.name}</option>
  {/each}
</select>

<style>
  .item {
    display: inline;
  }
</style>
