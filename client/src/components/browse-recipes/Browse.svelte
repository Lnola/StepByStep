<script>
  import { onMount, onDestroy } from 'svelte';
  import Header from '../header/Header.svelte';
  import Navigation from '../navigation/Navigation.svelte';

  onMount(()=>{

  });
</script>

<main>
  <Header />
  <Navigation />
  <div>asda</div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 84vh;
    margin-top: 8vh;
    margin-bottom: 8vh;
  }
</style>
