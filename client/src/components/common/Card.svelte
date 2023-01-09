<script>
  import { slide } from 'svelte/transition';
  import { deleteRecipe, togglePublish } from '@/utils/scripts/helpers';
  export let cover;
  export let title;
  export let rating;
  export let time;
  export let deletable;
  export let id;
  export let isPublished;

  let extended = false;
  let publishText = '';

  if (deletable && isPublished) {
    publishText = 'Unpublish';
  } else {
    publishText = 'Publish';
  }

  function toggleExtended() {
    extended = !extended;
  }
</script>

<article in:slide={{ delay: 300 }} out:slide={{ delay: 300 }}>
  {#if deletable}
    <button class="circle deleteButton" on:click={deleteRecipe(id)}><i class="fa-solid fa-trash" /></button>
    <button class="circle publish" on:click={togglePublish(id, isPublished)}
      >{publishText}</button
    >
  {/if}

  <img alt="recipeCover" src={cover} />
  <h3 class="title">{title}</h3>
  <button on:click={toggleExtended}>
    <span class="circle info {extended && 'extend'}"><i class="fa-solid fa-info" /></span>
    <span class="circle rating {extended && 'extend'}">{rating}/5</span>
    <span class="circle time {extended && 'extend'}">{time} min</span>
  </button>
</article>

<style>
  article {
    position: relative;
    overflow: hidden;
    width: 85vw;
    height: 25vh;
    margin-top: 10%;
    border-radius: 15px;
    background-color: var(--color-accent);
    z-index: 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .title {
    position: absolute;
    top: 7%;
    right: 0%;
    margin: 0;
    padding: 3%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-left: 0.5vh solid var(--color-secondary);
    background-color: var(--color-secondary);
    font-weight: 600;
    font-size: large;
    z-index: 1;
  }

  .circle.deleteButton {
    bottom: 4%;
    left: 83%;
    border: none;
  }

  .circle.publish {
    bottom: 4%;
    left: 57%;
    width: 80px;
    border: none;
    border-radius: 30px;
  }

  .circle {
    position: absolute;
    bottom: 4%;
    left: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: var(--color-secondary);
    font-size: medium;
    transition: 0.5s;
  }

  .info {
    z-index: 2;
  }

  .rating {
    overflow: hidden;
    z-index: 1;
  }

  .time {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-size: small;
    text-align: center;
    line-height: 100%;
    z-index: 0;
  }

  .info.extend {
    transform: translateX(240%);
  }

  .rating.extend {
    transform: translateX(120%);
  }
</style>
