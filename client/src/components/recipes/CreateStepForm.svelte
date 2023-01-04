<script>
  export let step;
</script>

<form>
  <label class="item" for="description">Description: </label>
  <input class="item" name="description" value={step.description} placeholder="Step description" />
  <label class="item" for="time">Time: </label>
  <input class="item" name="time" value={step.time} placeholder="Step time" />
</form>

<style>
  .item {
    display: block;
  }
</style>
