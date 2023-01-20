<script>
  import { onMount } from 'svelte';
  import { adminApi } from '@/api';

  let users = [];

  onMount(async () => {
    users = await adminApi.fetchAllUsers();
  });

  const remove = async userId => {
    if (!userId) return alert('Delete failed, try again');
    await adminApi.removeUser(userId);
    users = await adminApi.fetchAllUsers();
  };
</script>

<main>
  <h1>All users</h1>
  <div class="user-details bold">
    <p>Name</p>
    <p>Username</p>
    <p>Role</p>
  </div>
  {#each users as { ...user }}
    <div class="user-details">
      <p>{user.fullName}</p>
      <p>{user.username}</p>
      <p>{user.role.name}</p>
      <button class="delete" on:click={() => remove(user.id)}><i class="fa-solid fa-trash" /></button>
    </div>
  {/each}
</main>

<style>
  .user-details {
    border-bottom: 1px solid var(--color-light);
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 1fr;
    width: 95%;
    margin: auto;
    margin-bottom: 2%;
  }

  .user-details p {
    text-align: center;
    font-size: 0.875rem;
  }

  .delete {
    border: none;
    background-color: transparent;
    color: var(--color-primary);
    font-size: 1rem;
  }
</style>
