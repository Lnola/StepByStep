<script>
  export let time;
  let hours;
  let minutes;
  let seconds;

  $: time = setTime(hours, minutes, seconds);

  const setTime = (h, m, s) => {
    const d = new Date();
    d.setHours(h, m, s);
    return d;
  };
</script>

<fieldset class="time">
  <legend>How long does this step take?</legend>
  <input class="item" type="number" placeholder="hh" min="0" max="23" bind:value={hours} />
  <input class="item" type="number" placeholder="mm" min="0" max="59" bind:value={minutes} />
  <input class="item" type="number" placeholder="ss" min="0" max="59" bind:value={seconds} />
</fieldset>

<style>
  .time {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    padding: 1vh;
    margin: 2vh 0;
    font-size: small;
    color: var(--color-accent);
    max-width: 100%;
  }

  .item {
    display: inline;
    max-width: 12vw;
    height: 6vw;
    text-align: center;
    padding: 0;
    margin: 0 1vw;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
  }
</style>
