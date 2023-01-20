<script>
  import { createEventDispatcher } from 'svelte';
  import { createFieldValidator } from '@/utils/validation/validation';
  import MultipleSelect from './MultipleSelect.svelte';

  export let value = '';
  export let type = 'text';
  export let label = '';
  export let placeholder = '';
  export let rows = '';
  export let validators = [];
  export let selector = undefined;

  $: isError = !$validity.valid && $validity.dirty;

  const dispatch = createEventDispatcher();
  const [validity, validate] = createFieldValidator(...validators);
  validity.subscribe(({ valid }) => dispatch('valid', { valid }));

  const name = label;

  // const handleInputType = e => (e.target.type = type);
  const handleInputType = e => {};
</script>

<fieldset class="fieldset" class:error-input={isError}>
  <legend>{label}</legend>
  {#if type === 'text'}
    <input class="input" bind:value on:input={handleInputType} use:validate={value} {name} {placeholder} />
  {/if}
  {#if type === 'textarea'}
    <textarea class="input" bind:value on:input={handleInputType} use:validate={value} {rows} {name} {placeholder}></textarea>
  {/if}
  {#if type === 'select'}
    <div>
      <input hidden use:validate={selector.value} />
      <MultipleSelect bind:selector {placeholder} />
    </div>
  {/if}
  <span class="error-info">{isError ? $validity.message : ''}</span>
</fieldset>

<style>
  .fieldset {
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }

  .input {
    width: 100%;
    resize: vertical;
    min-height: 3vh;
    max-height: fit-content;
    border: none;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }

  .input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
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
