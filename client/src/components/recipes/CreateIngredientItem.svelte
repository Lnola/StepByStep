<script>
  import Autocomplete from '../common/Autocomplete.svelte';
  import Validation from '../common/Validation.svelte';

  export let ingredient;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<fieldset class="fieldset">
  <legend>Ingredient</legend>
  <div class="item ingredient-name">
    <Autocomplete
      bind:value={ingredient.ingredientId.value}
      on:valid={({ detail }) => (ingredient.ingredientId.valid = detail.valid)}
      source={ingredients.map(e => {
        return { id: e.id, label: e.name };
      })}
      id={ingredient.ingredientId.tagId}
      placeholder={ingredient.ingredientId.placeholder}
    />
  </div>
  <div class="item">
    <input class="amount"
        bind:value={ingredient.amount.value}
        placeholder={ingredient.amount.placeholder}
      />
  </div>
  <div class="item item-error">
    <Validation
      bind:value={ingredient.amount.value}
      on:valid={({ detail }) => (ingredient.amount.valid = detail.valid)}
      type={ingredient.amount.type}
      validators={ingredient.amount.validators}
    />
  </div>
  <div class="item">
    <select class="unit" bind:value={ingredient.unitOfMeasurementId.value}>
      <option selected disabled value="">{ingredient.unitOfMeasurementId.defaultSelector}</option>
      {#each unitsOfMeasurement as unitOfMeasurement}
        <option value={unitOfMeasurement.id}>{unitOfMeasurement.name}</option>
      {/each}
    </select>
  </div>
  <div class="item item-error">
    <Validation
      bind:value={ingredient.unitOfMeasurementId.value}
      on:valid={({ detail }) => (ingredient.unitOfMeasurementId.valid = detail.valid)}
      type={ingredient.unitOfMeasurementId.type}
      validators={ingredient.unitOfMeasurementId.validators}
    />
  </div>
</fieldset>

<style>
  .fieldset {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--color-accent);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    margin-top: 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }

  .ingredient-name {
    max-width: 10rem;
  }

  .item {
    margin: 1vh 0;
  }

  .item-error {
    margin: 0;
    padding: 0;
  }

  .amount {
    max-width: 4rem;
    outline: none;
    background-color: var(--color-primary);
    border-style: none;
    border-bottom: 1px solid var(--color-accent);
    justify-self: center;
  }

  .unit {
    max-width: 5rem;
    font-size: x-small;
    background-color: var(--color-primary);
    border-style: none;
  }
</style>
