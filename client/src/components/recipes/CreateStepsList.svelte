<script>
  import CreateStepItem from './CreateStepItem.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let steps;
</script>

{#each steps as step}
  <CreateStepItem step={step} />
{/each}
<button on:click={() => dispatch('add-step')}>Add Step</button>
