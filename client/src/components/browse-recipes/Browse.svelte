<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Header from '../header/Header.svelte';
  import Navigation from '../navigation/Navigation.svelte';
  import Category from './Category.svelte';
  import Recipes from './Recipes.svelte';
  let categoryId = 0
  function handleCategoryToggle(event) {
    categoryId = event.detail.value;
    let categoryName = event.detail.text
    console.log("CategoryID: " + categoryId + "\n"  + "Name: " + categoryName);
  }
</script>

<main>
  <Header />
  <Navigation />
  <Category on:categoryToggle={handleCategoryToggle} />
  <Recipes category={categoryId}/>
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
</style>
