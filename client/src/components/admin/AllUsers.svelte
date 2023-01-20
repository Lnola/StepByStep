<script>
  import { onMount } from 'svelte';
  import { adminApi } from '@/api';

  let users = [];

  onMount(async () => {
    users = await adminApi.fetchAllUsers();
  });

  const remove = async userId => {
    if (!userId) return alert('Delete failed, try again');
    await adminApi.deleteUser(userId);
    users = await adminApi.fetchAllUsers();
  };
</script>

<main>
  <h1>All users</h1>
  {#each users as { ...user }}
    <div class="user-details">
      <h1>Name: {user.fullName}</h1>
      <h1>Username: {user.username}</h1>
      <h1>Role: {user.role.name}</h1>
      <button class="circle delete" on:click={() => remove(user.id)}><i class="fa-solid fa-trash" /></button>
    </div>
  {/each}
</main>

<style>
  .user-details {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 1fr;
    width: 95%;
    margin: auto;
    margin-bottom: 2%;
  }
  .user-details h1,
  button {
    text-align: center;
    font-size: 12px;
  }

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
