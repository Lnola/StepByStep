<script>
  import { slide } from 'svelte/transition';
  import { logout } from '@/stores/auth';
  let areOptionsVisible = false;
  function toggleOptionsVisibility() {
    areOptionsVisible = !areOptionsVisible;
  }
</script>

<main>
  <div class="container">
    <div class="title">Step By Step</div>
    <button class="profileIcon" on:click={toggleOptionsVisibility}>
      <img class="profileIcon" alt="profileIcon" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />
    </button>
  </div>
  {#if areOptionsVisible}
    <div class="options" transition:slide>
      <button>Prijava</button>
      <button>Registracija</button>
      <button>Moj profil</button>
      <button>Moji recepti</button>
      <button on:click={logout}>Odjava</button>
    </div>
  {/if}
</main>

<style>
  .options > button {
    padding: 0;
    margin: 2.5vh;
    background-color: transparent;
    border: none;
    font-family: 'Poppins';
    color: white;
    font-size: large;
    font-weight: 600;
  }

  main {
    font-size: large;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    width: 100%;
    height: auto;
    background-color: #4b124b;
  }

  .options:before {
    height: 0;
  }

  .title {
    font-weight: 800;
    font-size: larger;
  }
  .profileIcon {
    width: 6vh;
    height: 6vh;
  }

  button.profileIcon {
    padding: 0;
    margin: 0;
    top: 0.5vh;
    right: 1vh;
    display: flex;
    width: 6vh;
    height: 6vh;
    position: absolute;
    background-color: transparent;
    border: none;
  }
  .container {
    height: 7vh;
    width: 100%;
    background-color: #89dfc3;
    align-items: center;
    color: black;
    display: flex;
    justify-content: center;
    border-bottom: 1vh solid #4b124b;
  }
</style>
