<script>
  import { minValueValidator, requiredValidator } from '@/utils/validation/validators';
  import CreateIngredientItem from './CreateIngredientItem.svelte';

  export let stepIngredients;
  export let ingredients;
  export let unitsOfMeasurement;

  let newIngredient = undefined;

  const addIngredient = e => {
    if (
      newIngredient === undefined ||
      (newIngredient.unitOfMeasurmentId.valid && newIngredient.ingredientId.valid && newIngredient.amount.valid)
    ) {
      newIngredient = {
        unitOfMeasurmentId: {
          value: '',
          type: 'number',
          valid: false,
          validators: [requiredValidator()],
        },
        ingredientId: {
          value: '',
          type: 'number',
          valid: false,
          validators: [requiredValidator()],
        },
        amount: {
          value: '',
          type: 'number',
          valid: false,
          label: 'Amount',
          placeholder: 'Select the amount of your ingredient',
          validators: [requiredValidator(), minValueValidator(0)],
        },
      };

      stepIngredients = [...stepIngredients, newIngredient];
    }
  };
</script>

<fieldset class="fieldset">
  <legend>Ingredients</legend>
  {#if stepIngredients.length === 0}
    <span>Select your recipe ingredients here!</span>
  {/if}
  {#each stepIngredients as ingredient}
    <div>
      <CreateIngredientItem bind:ingredient {ingredients} {unitsOfMeasurement} />
    </div>
  {/each}
  <button class="item" on:click={addIngredient}>Add ingredient</button>
</fieldset>

<style>
  .fieldset {
    border: 2px solid var(--color-accent);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    margin-top: 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }
</style>
