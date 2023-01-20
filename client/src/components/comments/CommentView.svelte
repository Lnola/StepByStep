<script>
  export let user;
  export let text;
</script>

<article>
  <div class="wrapper">
    <h3>{user}</h3>
    <p>{text}</p>
  </div>
</article>

<style>
  article {
    border-bottom: 1px solid var(--color-light);
  }
  h3,
  p {
    margin: 0;
  }

  .wrapper {
    padding: 4%;
  }
</style>
