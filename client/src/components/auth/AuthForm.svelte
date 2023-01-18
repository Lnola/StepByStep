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

<section>
  <div class="wrapper">
    <h1>{headerLabel}</h1>
    <form on:submit|preventDefault={() => dispatch('submit')}>
      {#each Object.entries(inputs) as [_, { value, type, valid, label, validators }]}
        <div class="input">
          <StepInput bind:value on:valid={({ detail }) => (valid = detail.valid)} {label} {validators} {type} />
        </div>
      {/each}

      <div class="submit">
        <StepButton type="submit">{buttonLabel}</StepButton>
      </div>
      <p>
        {callToActionLabel}
        <StepButton on:click={() => dispatch('swap')} inline>{actionlabel}</StepButton>
      </p>
    </form>
  </div>
</section>

<style>
  section {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    padding-bottom: 10%;
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
  }

  .input {
    margin-bottom: 12px;
  }

  :global(.submit > button) {
    width: 100%;
  }
</style>
