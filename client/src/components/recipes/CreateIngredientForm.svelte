<script>
  export let ingredient;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<div class="form">
  <select class="item" name="ingredientId" bind:value={ingredient.ingredientId}>
    <option selected disabled value="">Select ingredient</option>
    {#each ingredients as ingredient_}
      <option value={ingredient_.id}>{ingredient_.name}</option>
    {/each}
  </select>
  <input class="item" type="text" name="amount" placeholder="amount" bind:value={ingredient.amount} />
  <select class="item" name="unitOfMeasurementId" bind:value={ingredient.unitOfMeasurementId}>
    <option selected disabled value="">{unitsOfMeasurement.defaultSelector}</option>
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
