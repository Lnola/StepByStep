<script>
  import { onMount } from 'svelte';

  // export let location;
  import Header from '../header/Header.svelte';
  import Navigation from '../navigation/Navigation.svelte';
  import Featured from './Featured.svelte';


  
</script>

<main name="homepage">
  <Header />
  <Navigation />
  <Featured />
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
  @media only screen and (min-width: 768px) {
    main {
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 4fr;
    }
  }
</style>
