<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleChange({ target }) {
    dispatch('update', { value: +target.value });
  }

  export let categories = [];
  let isExpanded = false;

  function expand() {
    isExpanded = !isExpanded;
  }
</script>

<section>
  <button class="button" on:click={expand}>Filteri</button>
  <div class="container {isExpanded && 'extend'}">
    <div>Filtriraj po kategoriji:</div>
    <form>
      <select on:change={handleChange}>
        <option value="0">-</option>
        {#each categories as { id, name }}
          <option value={id}>{name}</option>
        {/each}
      </select>
    </form>
  </div>
</section>

<style>
  section {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 4vh;
    margin-top: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-accent);
    color: white;
    font-family: var(--font-family);
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 0vh;
    margin-top: 2vh;
    border-radius: 15px;
    background-color: var(--color-accent);
    color: white;
    opacity: 0;
    transition: 0.5s;
  }

  .extend {
    opacity: 1;
    height: 10vh;
  }

  select {
    width: 35vw;
    height: 5vh;
    font-size: small;
    font-family: var(--font-family);
    border-color: var(--color-secondary);
    background-color: var(--color-secondary);
    border-radius: 5px;
  }
</style>
