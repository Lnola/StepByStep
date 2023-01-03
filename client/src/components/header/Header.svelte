<script>
  import { slide } from 'svelte/transition';
  let areOptionsVisible = false;
  function showOptions() {
    areOptionsVisible = areOptionsVisible == false ? true : false;
  }
</script>

<main>
  <div class="container">
    <div class="title">Step By Step</div>

    <img
      on:click={showOptions}
      on:keydown={showOptions}
      class="profileIcon"
      alt="profileIcon"
      src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
    />
  </div>
  {#if areOptionsVisible}
    <div class="login" transition:slide>
      <a href="/login">Prijava</a>
      <a href="/register">Registracija</a>
      <a href="/profile">Moj profil</a>
      <a href="/my-recipes">Moji recepti</a>
      <a href="/logout">Odjava</a>
    </div>
  {/if}
</main>

<style>
  a {
    padding: 0;
    margin: 2.5vh;
    text-decoration: none;
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

  .login {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    width: 100%;
    height: auto;
    background-color: #4b124b;
  }

  .login:before {
    height: 0;
  }

  .title {
    font-weight: 800;
    font-size: larger;
  }
  .profileIcon {
    position: absolute;
    top: 0.5vh;
    right: 1vh;
    width: 6vh;
    height: 6vh;
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
