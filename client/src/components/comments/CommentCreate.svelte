<script>
  import { createEventDispatcher } from 'svelte';
  import { commentApi } from '@/api';

  const dispatch = createEventDispatcher();

  export let recipeId;
  let text;

  const submit = async () => {
    try {
      await commentApi.create({ recipeId, text });
      text = '';
      dispatch('created');
    } catch {
      alert('There was an error posting your comment. Try again!');
    }
  };
</script>

<div class="container">
  <textarea bind:value={text} placeholder="Leave a comment..." />
  <button on:click={submit}>
    <i class="fa-solid fa-paper-plane" />
  </button>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    margin-top: 24px;
    padding: 0 24px 0 24px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 16px;
    border: 1px solid var(--color-light);
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Poppins';
    outline-color: var(--color-primary);
  }

  button {
    position: absolute;
    bottom: 16px;
    right: calc(24px + 12px);
    color: var(--color-primary);
    border: 0;
    background-color: transparent;
    font-size: 1.25rem;
  }
</style>
