<script>
  import { onMount } from 'svelte';
  import { commentApi } from '@/api';
  import CommentView from './CommentView.svelte';

  export let recipeId;
  let comments = [];

  onMount(async () => {
    comments = await commentApi.fetchByRecipe(recipeId);
  });
</script>

<section class="comments">
  <div class="container">
    <h2 class="title">Comments</h2>
    <section class="wrapper">
      {#each comments as comment}
        <CommentView user={comment.user.fullName} text={comment.text} />
      {/each}
    </section>
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
