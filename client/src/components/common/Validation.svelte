<script>
  import { createEventDispatcher } from 'svelte';
  import { createFieldValidator } from '@/utils/validation/validation';

  export let value = '';
  export let type = 'text';
  export let validators = [];

  $: isError = !$validity.valid && $validity.dirty;
  $: isValid = !isError;

  const dispatch = createEventDispatcher();
  const [validity, validate] = createFieldValidator(...validators);
  validity.subscribe(({ valid }) => dispatch('valid', { valid }));

  const handleInputType = e => (e.target.type = type);
</script>

<div>
  <input bind:value on:input={handleInputType} use:validate={value} class:error-input={isError} hidden />
  <span class="error-info">{isError ? $validity.message : ''}</span>
</div>

<style>
  .error-info {
    height: 0.75rem;
    color: var(--color-error);
    font-size: 0.75rem;
  }
</style>
