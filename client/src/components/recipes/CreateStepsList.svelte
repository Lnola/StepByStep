<script>
  import CreateStepItem from './CreateStepItem.svelte';
  import { createEventDispatcher } from 'svelte';

  export let steps;

  const dispatch = createEventDispatcher();

  $: numOfSteps = steps.length;
</script>

{#each steps as step}
  <CreateStepItem {step} show={step.orderNumber === numOfSteps} />
{/each}
<button on:click={() => dispatch('add-step')}>Add Step</button>
