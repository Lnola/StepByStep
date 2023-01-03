<script>
  import { createEventDispatcher } from 'svelte';
  import { authApi } from '@/api';
  import { authStore } from '@/stores';
  import { redirect } from '@/utils/router/routing';
  import { requiredValidator } from '@/utils/validation/validators';
  import AuthForm from './AuthForm.svelte';

  const dispatch = createEventDispatcher();

  let inputs = {
    username: { value: '', type: 'text', valid: false, label: 'Username', validators: [requiredValidator()] },
    password: { value: '', type: 'password', valid: false, label: 'Password', validators: [requiredValidator()] },
  };

  const swap = () => dispatch('swap');

  const submit = async () => {
    const isFormValid = inputs.username.valid && inputs.password.valid;
    if (!isFormValid) return;

    const username = inputs.username.value;
    const password = inputs.password.value;
    try {
      const user = await authApi.login({ username, password });
      authStore.user.set(user);
      redirect('Home');
    } catch (err) {
      alert(err.response.data.message);
    }
  };
</script>

<AuthForm
  on:submit={submit}
  on:swap={swap}
  {inputs}
  headerLabel="Login"
  buttonLabel="Login"
  callToActionLabel="Don't have an account?"
  actionlabel="Click here to register!"
/>
