<script>
  import Login from './Login.svelte';
  import Register from './Register.svelte';

  const components = [Login, Register];
  const componentIndex = 0;
  const component = components[componentIndex];
</script>

<main>
  <svelte:component this={component} />
</main>
