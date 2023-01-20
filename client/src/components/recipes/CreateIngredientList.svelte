<script>
  import { minValueValidator, requiredValidator } from '@/utils/validation/validators';
  import CreateIngredientItem from './CreateIngredientItem.svelte';

  export let stepIngredients;
  export let selector;
  export let ingredients;
  export let unitsOfMeasurement;

  let newIngredient = undefined;
  let idCounter = 0;

  const addIngredient = e => {
    if (!checkValidity()) {
      alert('Please make sure that all of the previous ingredients are valid');
      return;
    }

    newIngredient = {
      unitOfMeasurementId: {
        value: '',
        type: 'number',
        valid: false,
        validators: [requiredValidator()],
        defaultSelector: '*Select unit',
      },
      ingredientId: {
        value: '',
        type: 'number',
        valid: false,
        validators: [requiredValidator()],
        placeholder: 'Name',
        tagId: idCounter++,
      },
      amount: {
        value: '',
        type: 'number',
        valid: false,
        label: '*Amount',
        placeholder: 'Amount',
        validators: [requiredValidator(), minValueValidator(0)],
      },
    };

    stepIngredients = [...stepIngredients, newIngredient];
    selector.forgive = false;
  };

  const checkValidity = () => {
    for (const i of stepIngredients) {
      if (!i.unitOfMeasurementId.valid || !i.amount.valid || !i.ingredientId.valid) {
        return false;
      }
    }
    return true;
  };
</script>

<fieldset class="fieldset">
  <legend>*Ingredients</legend>
  {#if stepIngredients.length === 0}
    <span>Select your recipe ingredients here!</span>
  {/if}
  {#each stepIngredients as ingredient}
    <div>
      <CreateIngredientItem bind:ingredient {ingredients} {unitsOfMeasurement} />
    </div>
  {/each}
  <button class="btn" on:click={addIngredient}>Add ingredient</button>
</fieldset>

<style>
  .fieldset {
    border: 2px solid var(--color-accent);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    margin-top: 0;
    text-align: center;
    font-size: small;
    color: var(--color-accent);
  }

  .btn {
    background-color: var(--color-accent);
    color: var(--color-white);
    border: none;
    border-radius: 25px;
    padding: 2vw;
    margin-top: 2vh;
  }
</style>
