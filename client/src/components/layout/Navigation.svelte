<script>
  import { slide } from 'svelte/transition';
  let isSearchVisible = false;
  let isMenuVisible = false;
  function toggleSearchVisibility() {
    isSearchVisible = !isSearchVisible;
    if (isSearchVisible) isMenuVisible = false;
  }

  function toggleMenuVisibility() {
    isMenuVisible = !isMenuVisible;
    if (isMenuVisible) isSearchVisible = false;
  }
</script>

<main>
  <div class="container">
    <div class="nav-grid">
      <div><a href="/">Naslovnica</a></div>
      <div><a href="/">Svi recepti</a></div>
      <div><a href="/">Objavi recept</a></div>
    </div>
    <div class="bottom-layout-grid">
      <div><a href="/">Profil</a></div>
      <div><a href="/">Kontakt</a></div>
    </div>
  </div>

  {#if isMenuVisible}
    <div class="mobile-menu" transition:slide>
      <div>Option 1</div>
      <div>Option 2</div>
      <div>Option 3</div>
      <div>Option 4</div>
      <div>Option 5</div>
    </div>
  {/if}

  {#if isSearchVisible}
    <div class="mobile-search" transition:slide>
      <input type="text" />
      <img
        class="icon"
        alt="search-icon"
        src="https://www.valleystar.org/wp-content/themes/bootstrap-basic4-child/images/white-search-icon.png"
      />
    </div>
  {/if}
  <div class="mobile-container">
    <div class="container-element">
      <a href="/"
        ><img
          class="icon"
          alt="home-icon"
          src="https://i.pinimg.com/originals/d7/34/6c/d7346c03444c44944cf2f5b5674ccf27.png"
        /></a
      >
    </div>
    <div class="container-element">
      <a href="browse"
        ><img
          class="icon"
          alt="cook-icon"
          src="https://cdn3.iconfinder.com/data/icons/rounded-white-housekeeping/139/Cooking-RoundedWhite-512.png"
        /></a
      >
    </div>
    <div class="container-element">
      <img
        on:click={toggleSearchVisibility}
        on:keypress={toggleSearchVisibility}
        class="icon"
        alt="search-icon"
        src="https://cdn4.iconfinder.com/data/icons/core-ui-filled-rounded/32/filled_rounded_search-512.png"
      />
    </div>
    <div class="container-element">
      <img
        on:click={toggleMenuVisibility}
        on:keypress={toggleMenuVisibility}
        class="icon"
        alt="menu-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Menu_button.svg/2048px-Xbox_Menu_button.svg.png"
      />
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  .mobile-menu {
    display: flex;
    justify-content: space-around;
    font-size: larger;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: 8vh;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 70vh;
    background-color: #4b124b;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    color: white;
  }
  .mobile-search {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 4fr 1fr;
    position: fixed;
    z-index: 1;
    bottom: 9vh;
    left: 5%;
    height: 10vh;
    width: 90%;
    background-color: #4b124b;
    border-radius: 15px;
  }

  .mobile-search input {
    font-family: 'Poppins';
    font-size: x-large;
    color: white;
    background-color: transparent;
    border: none;
    height: 70%;
    width: 90%;
  }

  input:focus {
    outline: none;
  }

  .mobile-container {
    z-index: 1;
    position: fixed;
    width: 100%;
    bottom: 0vh;
    left: 0vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 7vh;
    background-color: #89dfc3;
    border-top: 1vh solid #4b124b;
  }
  .container {
    display: none;
  }
  .container-element .icon,
  .mobile-search .icon {
    width: 5vh;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:focus {
    text-decoration: none;
  }
  @media only screen and (min-width: 768px) {
    .mobile-container {
      display: none;
    }
    .container {
      display: block;
      position: fixed;
      top: 8vh;
      width: 20%;
      background-color: #89dfc3;
      height: 92vh;
      border-right: 3px solid #ebf2af;
    }
    .nav-grid {
      height: 50%;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .bottom-layout-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-self: center;
      justify-self: baseline;
    }
    a {
      text-decoration: none;
      color: black;
    }
    a:focus {
      text-decoration: none;
    }
  }
</style>
