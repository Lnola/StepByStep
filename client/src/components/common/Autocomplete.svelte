<script>
  import { autocompleteValidator, requiredValidator } from '@/utils/validation/validators';
  import { onMount } from 'svelte';
  import Validation from './Validation.svelte';

  export let value;
  export let source;
  export let id;
  export let placeholder;

  let label = '';
  let validators = [requiredValidator(), autocompleteValidator(source.map(e => e.label))];

  function setAutocomplete() {
    window.$(document).ready(
      window.$(() => {
        window.$(`#${id}`).autocomplete({
          source: source,
          select: function( event, ui ) {
            label = ui.item.label;
            value = ui.item.id;
            return false;
          },
        })
      })
    );
  }

  onMount(setAutocomplete);
</script>

<div class="ui-widget">
  <input class="input" id={id} bind:value={label} {placeholder} />
  <Validation bind:value={label} on:valid {validators} />
</div>

<style>
  .input {
    outline: none;
  }
</style>
