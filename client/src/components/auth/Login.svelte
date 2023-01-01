<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const swap = () => dispatch('swap');
</script>

<main>
  <div>Login</div>
  <button on:click={swap}>Swap</button>
</main>
