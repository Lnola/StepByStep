<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let inline = false;
  export let type = 'button';
</script>

<button class={inline && 'inline'} on:click={() => dispatch('click')} {type}>
  <slot />
</button>

<style>
  button {
    padding: 12px;
    border: 0;
    border-radius: 16px;
    background-color: var(--color-primary);
    font-family: 'Poppins';
    font-size: 1rem;
    color: var(--color-white);
  }

  .inline {
    width: initial;
    font-family: var(--font-family);
    font-size: 1rem;
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--color-primary);
    cursor: pointer;
  }
</style>
