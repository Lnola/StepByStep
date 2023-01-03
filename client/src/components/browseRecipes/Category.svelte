<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import categories from '@/api/categories';
  const dispatch = createEventDispatcher();

  function handleChange(e) {
    dispatch('categoryToggle', {
      // @ts-ignore
      value: e.target.value,
      // @ts-ignore
      text: e.target.options[e.target.selectedIndex].text,
    });
  }

  let categoriesList = [];
  let isExpanded;

  onMount(async () => {
    isExpanded = false;
    categoriesList = await categories.fetchAll();
  });

  function expand() {
    let element = document.querySelector('.categoryContainer');
    if (isExpanded == false) {
      // @ts-ignore
      element.style.visibility = 'visible';
      // @ts-ignore
      element.style.height = '10vh';
      isExpanded = true;
    } else {
      // @ts-ignore
      element.style.visibility = 'hidden';
      // @ts-ignore
      element.style.height = '0vh';
      isExpanded = false;
    }
  }
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="expand" on:click={expand}>Filteri</div>
  <div class="categoryContainer">
    <div class="text">Filtriraj po kategoriji:</div>
    <form>
      <select id="categorySelect" name="categorySelect" on:change={handleChange}>
        <option value="0">Not selected</option>
        {#each categoriesList as category, id}
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
    font-size: small;
    font-family: 'Poppins';
    border-color: #ebf2af;
    background-color: #ebf2af;
    border-radius: 5px;
  }
</style>
