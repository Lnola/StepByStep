<script>
  import CreateStepItem from './CreateStepItem.svelte';

  export let steps;
  export let ingredients;
  export let unitsOfMeasurement;

  $: numOfSteps = steps.length;

  const addStep = e => {
    const newStep = {
      description: '',
      time: '',
      ingredients: [],
    };

    steps = [...steps, newStep];
  };

  const removeStep = e => {
    // TODO: Confirm message as the constant (eg DELETE_STEP_CONFIRM)
    const response = confirm('Are you sure you want to delete this step?');

    if (response) {
      let index = e.detail;
      steps = [...steps.slice(0, index), ...steps.slice(index + 1)];
    }
  };

  const moveStepUp = e => {
    moveHelper(e.detail);
  };

  const moveStepDown = e => {
    // To move step down, it's like moving the next step up, same thing;
    // so we use index of next step, which is e.detail + 1
    moveHelper(e.detail + 1);
  };

  const moveHelper = stepIndex => {
    let newSteps = steps.slice(0, stepIndex - 1);
    newSteps.push(steps[stepIndex], steps[stepIndex - 1], ...steps.slice(stepIndex + 1));
    steps = [...newSteps];
  };

  // This will force user to have at least one step for each recipe
  addStep();
</script>

{#each steps as step, index}
  <CreateStepItem
    on:move-up={moveStepUp}
    on:move-down={moveStepDown}
    on:remove-step={removeStep}
    show={index === numOfSteps - 1}
    enableUp={index > 0}
    enableDown={index < numOfSteps - 1}
    enableDelete={numOfSteps > 1}
    {step}
    {index}
    {ingredients}
    {unitsOfMeasurement}
  />
{/each}
<button on:click={addStep}>Add Step</button>
