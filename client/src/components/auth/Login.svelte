<script>
  import { authApi } from '@/api';
  import { authStore } from '@/stores';
  import { redirect } from '@/utils/routing';
  import { createEventDispatcher } from 'svelte';
  import StepButton from '../common/Button.svelte';

  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';

  const swap = () => dispatch('swap');

  const submit = async () => {
    try {
      const user = await authApi.login({ username, password });
      authStore.user.set(user);
      redirect('Home');
    } catch (err) {
      alert(err.response.data.message);
    }
  };
</script>

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={submit}>
    <label for="username">Username:</label>
    <input bind:value={username} type="text" name="username" placeholder="Username..." />
    <label for="password">Password:</label>
    <input bind:value={password} type="password" name="password" placeholder="Password..." />
    <StepButton type="submit">Login</StepButton>
    <p>
      Don't have an account?
      <StepButton on:click={swap} inline>Click here to register.</StepButton>
    </p>
  </form>
</main>
