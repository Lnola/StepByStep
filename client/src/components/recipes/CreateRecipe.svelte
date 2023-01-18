<script>
  import CreateRecipeForm from './CreateRecipeForm.svelte';
</script>

<div class="container">
  <h2>
    <span class="title-part primary">Create</span>
    <span class="title-part secondary">your</span>
    <span class="title-part primary">recipe!</span>
  </h2>
  <CreateRecipeForm />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin: 10vh 20vw;
    text-align: center;
    /* background-color: var(--color-primary); */
  }

  .title-part {
    /* display: block; */
    font-size: smaller;
    text-align: center;
    margin: 1vh 0;
    padding: 0;
  }

  /* .primary {
    color: var(--color-primary);
  } */

  .secondary {
    color: var(--color-accent);
    font-size: larger;
  }
</style>
