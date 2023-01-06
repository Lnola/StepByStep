<script>
  import { slide } from 'svelte/transition';
  import { logout } from '@/stores/auth';
  import { redirect } from '@/utils/router/routing';

  let optionsVisible = false;
  function toggleOptionsVisibility() {
    optionsVisible = !optionsVisible;
  }
</script>

<header>
  <section class="header">
    <div />
    <h1 class="title">Step By Step</h1>
    <button class="profile" on:click={toggleOptionsVisibility}>
      <i class="fa-regular fa-circle-user" />
    </button>
  </section>
  {#if optionsVisible}
    <aside transition:slide>
      <button on:click={() => redirect('UserRecipes')}>Moji recepti</button>
      <button on:click={logout}>Odjava</button>
    </aside>
  {/if}
</header>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    font-size: large;
    z-index: 3;
  }

  .header {
    display: grid;
    grid-template-columns: 20% auto 20%;
    height: 7vh;
    border-bottom: 1vh solid var(--color-accent);
    color: var(--color-black);
    background-color: var(--color-primary);
  }

  .title {
    margin: auto;
    text-align: center;
    font-weight: 800;
    font-size: larger;
  }

  .profile {
    width: 100%;
    font-size: 2rem;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    width: 100%;
    height: auto;
    background-color: var(--color-accent);
  }

  aside > button {
    margin: 2.5vh;
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: var(--font-family);
    color: var(--color-white);
    font-size: large;
    font-weight: 600;
  }

  @media only screen and (min-width: 768px) {
    .profile {
      display: none;
    }
  }
</style>
