<script>
  import CreateStepForm from './CreateStepForm.svelte';
  import { createEventDispatcher } from 'svelte';
  import SmallButton from '../common/SmallButton.svelte';

  export let show;
  export let enableUp;
  export let enableDown;
  export let enableDelete;
  export let step;
  export let index;
  export let ingredients;
  export let unitsOfMeasurement;

  $: toggleBtnText = show ? '-' : '+';

  const dispatch = createEventDispatcher();

  const toggle = () => (show = !show);
</script>

<div class="bar">
  <h4 class="bar-item title">Step {index + 1}</h4>
  <div class="bar-item btns">
    {#if enableUp}
      <SmallButton on:click={() => dispatch('move-up', index)}>&uarr</SmallButton>
    {/if}
    {#if enableDown}
      <SmallButton on:click={() => dispatch('move-down', index)}>&darr</SmallButton>
    {/if}
    <SmallButton on:click={toggle}>{toggleBtnText}</SmallButton>
    <SmallButton on:click={() => dispatch('remove-step', index)} disabled={!enableDelete}>x</SmallButton>
  </div>
</div>
{#if show}
  <div class="bar-content">
    <CreateStepForm bind:step {ingredients} {unitsOfMeasurement} />
  </div>
{/if}

<style>
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    background-color: var(--color-accent);
    box-shadow: black;
    margin-top: 1vh;
  }

  .bar-item {
    margin: 1vh 10vw;
  }

  .title {
    color: var(--color-primary);
  }

  .btns {
    display: flex;
    justify-content: end;
    align-items: center;
  }
</style>
