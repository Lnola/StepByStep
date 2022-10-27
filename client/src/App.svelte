<script>
  import { onDestroy, onMount } from 'svelte';
  import { Router, Route } from 'svelte-routing';
  import createUrlObserver from '@/utils/createUrlObserver';
  import routes, { beforeRoute } from '@/routes';

  let observer;
  onMount(() => (observer = createUrlObserver(beforeRoute)));
  onDestroy(() => observer.disconnect());
</script>

<Router>
  {#each routes as { path, component }}
    <Route {path} {component} />
  {/each}
</Router>
