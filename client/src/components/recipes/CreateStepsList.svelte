<script>
  import CreateStepItem from './CreateStepItem.svelte';

  export let steps;
</script>

{#each steps as step}
  <CreateStepItem step={step} />
{/each}
