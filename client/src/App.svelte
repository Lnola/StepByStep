<script>
  import { onDestroy, onMount } from 'svelte';
  import { Router, Route } from 'svelte-routing';
  import Header from './components/layout/Header.svelte';
  import Navigation from './components/layout/Navigation.svelte';
  import createUrlObserver from '@/utils/router/createUrlObserver';
  import routes, { beforeRoute } from '@/routes';
  import { isAuthRoute } from './utils/router/routing';

  let observer;
  onMount(() => (observer = createUrlObserver(beforeRoute)));
  onDestroy(() => observer.disconnect());
</script>

<Router>
  {#if !isAuthRoute()}
    <Header />
    <Navigation />
  {/if}
  {#each routes as { path, component }}
    <Route {path}><svelte:component this={component} /></Route>
  {/each}
</Router>
