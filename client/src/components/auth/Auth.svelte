<script>
  import Login from './Login.svelte';
  import Register from './Register.svelte';

  const components = [Login, Register];
  let componentIndex = 0;
  $: component = components[componentIndex];

  const swap = () => (componentIndex = (componentIndex + 1) % components.length);
</script>

<main>
  <svelte:component this={component} on:swap={swap} />
</main>
