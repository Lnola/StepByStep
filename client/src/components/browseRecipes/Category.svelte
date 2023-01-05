<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { categoriesApi } from '@/api';
  const dispatch = createEventDispatcher();

  function handleChange({ target }) {
    dispatch('update', {
      value: +target.value,
    });
  }
  let value = null;
  let categoriesList = [];
  let isExpanded = false;

  onMount(async () => {
    categoriesList = await categoriesApi.fetchAll();
  });

  function expand() {
    isExpanded = !isExpanded;
  }
</script>

<main>
  <button class="expand" on:click={expand}>Filteri</button>
  <div class="categoryContainer {isExpanded && 'extend'}">
    <div class="text">Filtriraj po kategoriji:</div>
    <form>
      <select bind:value on:change={handleChange}>
        <option value="0">Not selected</option>
        {#each categoriesList as { id, name }}
          <option value={id}>{name}</option>
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
