<script>
  import CreateStepItem from './CreateStepItem.svelte';
  import { createEventDispatcher } from 'svelte';

  export let steps;

  const dispatch = createEventDispatcher();

  $: numOfSteps = steps.length;
</script>

{#each steps as step, index}
  <CreateStepItem
    on:move-up
    on:move-down
    show={index === numOfSteps - 1}
    enableUp={index > 0}
    enableDown={index < numOfSteps - 1}
    {step}
    {index}
  />
{/each}
<button on:click={() => dispatch('add-step')}>Add Step</button>
