<script>
  import StepButton from '@/components/common/Button.svelte';
  import { logout } from '@/stores/auth';
</script>

<main>
  <div>Home</div>
  <StepButton on:click={logout}>Logout</StepButton>
</main>
