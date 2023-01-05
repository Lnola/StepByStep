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

<main>
  <button class="expand" on:click={expand}>Filteri</button>
  <div class="categoryContainer {isExpanded && 'extend'}">
    <div>Filtriraj po kategoriji:</div>
    <form>
      <select on:change={handleChange}>
        <option value="0">-</option>
        {#each categories as { id, value }}
          <option value={id}>{value}</option>
        {/each}
      </select>
    </form>
  </div>
</main>

<style>
  main {
    width: 90%;
  }

  .categoryContainer {
    overflow: hidden;
    position: relative;
    color: white;
    margin-top: 5vh;
    border-radius: 15px;
    background-color: #4b124b;
    display: flex;
    visibility: hidden;
    transition: 0.5s;
    flex-direction: row;
    height: 0vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .categoryContainer.extend {
    visibility: visible;
    height: 10vh;
  }

  .expand {
    color: white;
    border-radius: 5px;
    border: none;
    font-family: 'Poppins';
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #4b124b;
    width: 30%;
    height: 4vh;
    position: absolute;
    right: 35%;
    top: 8.5vh;
  }

  select {
    height: 5vh;
    width: 35vw;
    font-size: small;
    font-family: 'Poppins';
    border-color: #ebf2af;
    background-color: #ebf2af;
    border-radius: 5px;
  }
</style>
