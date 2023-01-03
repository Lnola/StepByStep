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
  {#if isError}
    <span class="error-info">{$validity.message}</span>
  {/if}
</div>

<style>
  input {
    outline: none;
    border-width: 2px;
  }

  .error-input {
    border-color: red;
  }

  .error-info {
    color: red;
  }
</style>
