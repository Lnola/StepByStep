<!-- This component at the moment doesn't make sense - remove it if so -->
<script>
  import CreateIngredientForm from './CreateIngredientForm.svelte';

  export let ingredient;
  export let ingredients;
  export let unitsOfMeasurement;
</script>

<CreateIngredientForm {ingredient} {ingredients} {unitsOfMeasurement} />
