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
  .inline {
    font-family: var(--font-family);
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: red;
  }
</style>
