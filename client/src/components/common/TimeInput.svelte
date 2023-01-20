<script>
  import { maxValueValidator, minValueValidator, timeRequiredValidator } from '@/utils/validation/validators';
    import { onMount } from 'svelte';
  import Validation from './Validation.svelte';

  export let value;
  export let label;

  let hours;
  let minutes;
  let seconds;
  let validators = [
    timeRequiredValidator(),
    minValueValidator(0, 'hours'),
    minValueValidator(0, 'minutes'),
    minValueValidator(0, 'seconds'),
    maxValueValidator(23, "hours"),
    maxValueValidator(59, "minutes"),
    maxValueValidator(59, "seconds"),
  ];

  $: value = { hours, minutes, seconds };

  onMount(() => {
    hours = 0;
    minutes = 0;
    seconds = 0;
  })
</script>

<fieldset class="fieldset">
  <legend>{label}</legend>
  <div class="time">
    <input class="item" type="number" placeholder="hh" bind:value={hours} />
    <input class="item" type="number" placeholder="mm" bind:value={minutes} />
    <input class="item" type="number" placeholder="ss" bind:value={seconds} />
  </div>
  <Validation bind:value on:valid {validators} />
</fieldset>

<style>
  .fieldset {
    border: 2px solid var(--color-accent);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    margin-top: 0;
    text-align: left;
    font-size: small;
    color: var(--color-accent);
  }

  .time {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%;
  }

  .item {
    display: inline;
    max-width: 12vw;
    height: 6vw;
    text-align: center;
    padding: 0;
    margin: 0 1vw;
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    outline: none;
    background-color: var(--color-primary);
  }
</style>
