<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import categoriesApi from '@/api/categoriesApi';
  const dispatch = createEventDispatcher();
  addEventListener('DOMContentLoaded', event => {
    let element = document.getElementById('categorySelect');

    element.addEventListener('change', () => {
      dispatch('categoryToggle', {
        // @ts-ignore
        value: element.value,
        // @ts-ignore
        text: element.options[element.selectedIndex].text,
      });
    });
  });
  let categories = [];
  onMount(async () => {
    expanded = false;
    categories = await categoriesApi.categories();
  });

  let expanded;
  function expand() {
    let element = document.querySelector('.categoryContainer');
    if (expanded == false) {
      // @ts-ignore
      element.style.visibility = 'visible';
      // @ts-ignore
      element.style.height = '10vh';
      expanded = true;
    } else {
      // @ts-ignore
      element.style.visibility = 'hidden';
      // @ts-ignore
      element.style.height = '0vh';
      expanded = false;
    }
  }
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="expand" on:click={expand}>Filteri</div>
  <div class="categoryContainer">
    <div class="text">Filtriraj po kategoriji:</div>
    <form>
      <select id="categorySelect" name="categorySelect">
        <option value="0">Not selected</option>
        {#each categories as category, id}
          <option value={category.id}>{category.name}</option>
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

  .expand {
    color: white;
    border-radius: 5px;
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
    font-size: medium;
    font-family: 'Poppins';
    border-color: #ebf2af;
    background-color: #ebf2af;
    border-radius: 5px;
  }
</style>
