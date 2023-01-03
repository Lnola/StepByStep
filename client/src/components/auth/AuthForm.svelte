<script>
  import { createEventDispatcher } from 'svelte';
  import StepButton from '@/components/common/Button.svelte';
  import StepInput from '@/components/common/Input.svelte';

  const dispatch = createEventDispatcher();

  export let inputs = null;
  export let headerLabel;
  export let buttonLabel;
  export let callToActionLabel;
  export let actionlabel;
</script>

<h1>{headerLabel}</h1>
<form on:submit|preventDefault={() => dispatch('submit')}>
  {#each Object.entries(inputs) as [_, { value, type, valid, label, validators }]}
    <StepInput bind:value on:valid={({ detail }) => (valid = detail.valid)} {label} {validators} {type} />
  {/each}

  <StepButton type="submit">{buttonLabel}</StepButton>
  <p>
    {callToActionLabel}
    <StepButton on:click={() => dispatch('swap')} inline>{actionlabel}</StepButton>
  </p>
</form>
