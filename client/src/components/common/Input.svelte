<script>
  import { createEventDispatcher } from 'svelte';
  import { createFieldValidator } from '@/utils/validation/validation';

  export let value = '';
  export let label = '';
  export let type = 'text';
  export let validators = [];

  $: isError = !$validity.valid && $validity.dirty;

  const dispatch = createEventDispatcher();
  const [validity, validate] = createFieldValidator(...validators);
  validity.subscribe(({ valid }) => dispatch('valid', { valid }));

  const name = label;
  const placeholder = `${label}...`;

  const handleInputType = e => (e.target.type = type);
</script>

<div>
  <label for={label}>{label}:</label>
  <input bind:value on:input={handleInputType} use:validate={value} class:error-input={isError} {name} {placeholder} />
  <span class="error-info">{isError ? $validity.message : ''}</span>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 12px;
    border: 1px solid var(--color-accent);
    border-radius: 16px;
    outline: none;
    font-family: 'Poppins';
  }

  .error-input {
    border-color: var(--color-error);
  }

  .error-info {
    height: 0.75rem;
    color: var(--color-error);
    font-size: 0.75rem;
  }
</style>
