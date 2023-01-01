<script>
  import { createEventDispatcher } from 'svelte';
  import StepButton from '@/components/common/Button.svelte';
  import StepInput from '@/components/common/Input.svelte';
  import { authApi } from '@/api';
  import { authStore } from '@/stores';
  import { redirect } from '@/utils/router/routing';
  import { requiredValidator } from '@/utils/validation/validators';

  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';
  let isUsernameValid = false;
  let isPasswordValid = false;

  $: isValid = isUsernameValid && isPasswordValid;

  const swap = () => dispatch('swap');

  const submit = async () => {
    if (!isValid) return;
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
    <StepInput
      bind:value={username}
      label="Username"
      validators={[requiredValidator()]}
      on:valid={({ detail: { valid } }) => (isUsernameValid = valid)}
    />
    <StepInput
      bind:value={password}
      label="Password"
      validators={[requiredValidator()]}
      on:valid={({ detail: { valid } }) => (isPasswordValid = valid)}
    />

    <StepButton type="submit">Login</StepButton>
    <p>
      Don't have an account?
      <StepButton on:click={swap} inline>Click here to register.</StepButton>
    </p>
  </form>
</main>
