<script>
  import Header from '../header/Header.svelte';
  import Navigation from '../navigation/Navigation.svelte';
  import Featured from './Featured.svelte';
  import StepButton from '@/components/common/Button.svelte';
  import { logout } from '@/stores/auth';
</script>

<main>
  <div>Home</div>
  <StepButton on:click={logout}>Logout</StepButton>
  >>>>>>> main
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
