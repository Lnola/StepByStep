<script>
  import Autocomplete from '../common/Autocomplete.svelte';

  export let ingredient;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<div class="form">
  <Autocomplete
    bind:value={ingredient.ingredientId.value}
    on:valid={({ detail }) => (ingredient.ingredientId.valid = detail.valid)}
    source={ingredients.map(e => {
      return { id: e.id, label: e.name };
    })}
    id="ingredients"
    placeholder="Ingredient"
  />
  <input class="item" type="text" name="amount" placeholder="amount" bind:value={ingredient.amount} />
  <select class="item" name="unitOfMeasurementId" bind:value={ingredient.unitOfMeasurementId}>
    <option selected disabled value="">Select unit</option>
    {#each unitsOfMeasurement as unitOfMeasurement}
      <option value={unitOfMeasurement.id}>{unitOfMeasurement.name}</option>
    {/each}
  </select>
</div>

<style>
  .form {
    margin: 2% 0;
  }

  .item {
    display: block;
  }
</style>
