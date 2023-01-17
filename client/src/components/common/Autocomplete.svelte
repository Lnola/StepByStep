<script>
  import { onMount } from 'svelte';

  export let source;
  export let id;

  function setAutocomplete() {
    window.$(document).ready(
      window.$(() => {
        window.$(`#${id}`).autocomplete({
          source: source
        })
      })
    );
  }

  onMount(setAutocomplete);
</script>

<div class="ui-widget">
  <label for="tags">Tags: </label>
  <input id={id} />
</div>
