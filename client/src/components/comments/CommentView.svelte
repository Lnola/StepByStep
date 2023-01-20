<script>
  import { createEventDispatcher } from 'svelte';
  import { adminApi } from '@/api';
  import { isAdmin } from '@/stores/auth';

  const dispatch = createEventDispatcher();

  export let user;
  export let text;
  export let id;

  const remove = async () => {
    try {
      await adminApi.removeComment(id);
      dispatch('deleted');
    } catch {
      alert('Error deleting a comment. Try again!');
    }
  };
</script>

<article>
  <div class="wrapper">
    <h3>{user}</h3>
    <p>{text}</p>
    {#if isAdmin()}
      <button class="delete" on:click={remove}><i class="fa-solid fa-trash" /></button>
    {/if}
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
    position: relative;
  }

  .delete {
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-primary);
    font-size: medium;
    transition: 0.5s;
  }
</style>
