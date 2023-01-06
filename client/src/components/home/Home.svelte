<script>
  import Featured from '@/components/home/Featured.svelte';
</script>

<main>
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
      display: grid;
      grid-template-columns: 1fr 4fr;
      width: 100%;
      height: 100vh;
    }
  }
</style>
