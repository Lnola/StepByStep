<script>
  import { onMount } from 'svelte';
  import { commentApi } from '@/api';
  import CommentView from './CommentView.svelte';
  import CommentCreate from '../comments/CommentCreate.svelte';

  export let recipeId;
  let comments = [];

  const fetchComments = async () => {
    comments = await commentApi.fetchByRecipe(recipeId);
  };

  onMount(async () => {
    await fetchComments();
  });
</script>

<section class="comments">
  <CommentCreate {recipeId} on:created={() => fetchComments()} />
  <div class="container">
    <h2 class="title">Comments</h2>
    {#if !comments.length}
      <p>Be the first to comment!</p>
    {:else}
      <section class="wrapper">
        {#each comments as comment}
          <CommentView user={comment.user.fullName} text={comment.text} />
        {/each}
      </section>
    {/if}
  </div>
</section>

<style>
  .comments {
    width: 100%;
  }

  .container {
    padding: 0 24px 0 24px;
  }

  .wrapper {
    border: 1px solid var(--color-light);
    border-radius: 8px;
  }
</style>
