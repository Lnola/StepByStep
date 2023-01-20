<script>
  import CreateStepItem from './CreateStepItem.svelte';
  import settings from '@/settings/settings.json';
  import { minLengthValidator, requiredValidator, selectionRequiredValidator } from '@/utils/validation/validators';
  import { onMount } from 'svelte';
  import Button from '../common/Button.svelte';
  import Validation from '../common/Validation.svelte';

  export let steps;
  export let ingredients;
  export let unitsOfMeasurement;
  export let selector;
  export let validators;

  $: numOfSteps = steps.length;
  $: showStepIndex = numOfSteps - 1;

  const addStep = e => {
    const newStep = {
      description: {
        value: '',
        type: 'textarea',
        valid: false,
        label: '*Step description',
        placeholder: 'Describe your step here!',
        validators: [requiredValidator(), minLengthValidator(settings.minLength.description)],
      },
      time: {
        value: '',
        type: 'number',
        valid: false,
        label: '*Step time',
        placeholder: 'How long does this step take?',
        validators: [],
      },
      ingredients: {
        value: [],
        type: 'list',
        valid: false,
        label: '*Step ingredients',
        placeholder: 'Select your step ingredients!',
        selector: selector.innerSelector,
        validators: [selectionRequiredValidator(selector.innerSelector)],
      },
    };

    steps = [...steps, newStep];
    selector.forgive = false;
  };

  const removeStep = e => {
    const response = confirm(settings.messages.deleteStep);

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
    moveHelper(e.detail, 1);
  };

  const moveHelper = (stepIndex, offset = 0) => {
    stepIndex += offset;

    let newSteps = steps.slice(0, stepIndex - 1);
    newSteps.push(steps[stepIndex], steps[stepIndex - 1], ...steps.slice(stepIndex + 1));
    steps = [...newSteps];

    showStepIndex = offset === 0 ? stepIndex - 1 : stepIndex;
  };

  // This will force user to have at least one step for each recipe
  onMount(addStep);
</script>

{#each steps as step, index}
  <CreateStepItem
    on:move-up={moveStepUp}
    on:move-down={moveStepDown}
    on:remove-step={removeStep}
    show={index === showStepIndex}
    enableUp={index > 0}
    enableDown={index < numOfSteps - 1}
    enableDelete={numOfSteps > 1}
    {step}
    {index}
    {ingredients}
    {unitsOfMeasurement}
  />
{/each}
<Validation bind:value={steps} on:valid {validators} />
<Button on:click={addStep}>Add step</Button>
