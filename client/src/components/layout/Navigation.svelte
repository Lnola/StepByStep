<script>
  import Button from '@/components/common/Button.svelte';
  import { redirect } from '@/utils/router/routing';
</script>

<nav>
  <section class="container">
    <div class="links">
      <Button on:click={() => redirect('Home')} inline>Naslovnica</Button>
      <Button on:click={() => redirect('Recipes')} inline>Svi recepti</Button>
      <Button on:click={() => redirect('Home')} inline>Objavi recept</Button>
      <Button on:click={() => redirect('Home')} inline>Profil</Button>
    </div>
  </section>

  <section class="mobile-container">
    <Button on:click={() => redirect('Home')} inline><i class="fa-solid fa-house" /></Button>
    <Button on:click={() => redirect('Recipes')} inline><i class="fa-solid fa-burger" /></Button>
    <Button on:click={() => redirect('CreateRecipe')} inline><i class="fa-solid fa-upload" /></Button>
  </section>
</nav>

<style>
  .container {
    display: none;
  }

  .mobile-container {
    position: fixed;
    bottom: 0vh;
    left: 0vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 7vh;
    border-top: 1vh solid var(--color-accent);
    background-color: var(--color-primary);
    z-index: 1;
  }

  .mobile-container > :global(button) {
    font-size: 1.5rem;
    color: var(--color-accent);
  }

  @media only screen and (min-width: 768px) {
    .container {
      position: fixed;
      top: 8vh;
      display: block;
      width: 20%;
      height: 92vh;
      border-right: 3px solid var(--color-secondary);
      background-color: var(--color-primary);
    }

    .links {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      justify-content: center;
      align-items: center;
      height: 50%;
      text-align: center;
    }

    .links > :global(button) {
      font-size: 1rem;
      color: var(--color-black);
    }

    .mobile-container {
      display: none;
    }
  }
</style>
