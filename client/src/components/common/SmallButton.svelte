<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let type = 'button';
</script>

<button class="button" on:click={() => dispatch('click')} {type}>
  <slot />
</button>

<style>
  button {
    padding: 0 7px;
    border: 0;
    border-radius: 50px;
    background-color: var(--color-primary);
    font-family: 'Poppins';
    font-size: small;
    color: var(--color-accent);
    text-align: center;
    margin: 0 0.5vw;
  }

  /* .inline {
    width: initial;
    font-family: var(--font-family);
    font-size: 1rem;
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--color-primary);
    cursor: pointer;
  } */
</style>
