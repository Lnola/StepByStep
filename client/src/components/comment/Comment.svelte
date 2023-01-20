<!-- 
    Ovo je samo gumb za brisanje komentara
    Trebat ce ga dodati negdje unutar komentara i bitno je da comment.id vraca id komentara (ne mora nuzno biti comment.id)
 -->
<script>
  import { adminApi } from '@/api';
  import { isAdmin } from '@/stores/auth';

  let comment;
  let deleteComment = isAdmin();

  const remove = async commentId => {
    if (!commentId) return alert('Delete failed, try again');
    await adminApi.removeComment(commentId);
  };
</script>

<main>
  {#if deleteComment}
    <button class="circle delete" on:click={() => remove(comment.id)}><i class="fa-solid fa-trash" /></button>
  {/if}
</main>

<style>
  .circle.delete {
    position: unset;
    border: none;
  }

  .circle {
    position: absolute;
    bottom: 10px;
    left: 10px;
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
</style>
