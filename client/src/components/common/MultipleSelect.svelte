<script>
  export let placeholder = '';
  export let selector;

  const handleItemSelection = e => {
    let selectionId = parseInt(e.target.value);

    const item = selector.source.find(item => item.id === parseInt(selectionId));
    if (item === undefined) return;

    const alreadyIn = selector.value.find(item => item.id === parseInt(selectionId));
    if (alreadyIn) return;

    selector.value = [...selector.value, item];
    selector.forgive = false;

    selectDefaultSelection();
  };

  const handleItemDeselection = e => {
    let selectionId = parseInt(e.target.value);

    selector.value = selector.value.filter(item => item.id !== selectionId);

    selectDefaultSelection();
  };

  const selectDefaultSelection = () => {
    const option = window.$('#defaultSelection');
    option[0].selected = true;
  };
</script>

<div class="items">
  {#if selector.value.length === 0}
    <span>{placeholder}</span>
  {/if}
  {#each selector.value as item}
    <div class="item">
      <span class="item-part">{item.name}</span>
      <button class="item-part btn" value={item.id} on:click={handleItemDeselection}>x</button>
    </div>
  {/each}
</div>
<div class="select">
  <select class="select-item" on:change={handleItemSelection}>
    <option id="defaultSelection" selected disabled value="">{selector.defaultSelection}</option>
    {#each selector.source as category}
      <option value={category.id}>{category.name}</option>
    {/each}
  </select>
</div>

<style>
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }

  .item {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1vh 1vw;
    padding: 0;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .item-part {
    margin: 0 1vw;
  }

  .select {
    text-align: center;
    margin: 1vh 0;
    padding: 0;
  }

  .select-item {
    background-color: var(--color-primary);
    border: 1px solid var(--color-accent);
    border-radius: 25px;
    padding: 0.5rem;
  }

  .btn {
    position: relative;
    top: 0.1vh;
    right: 0.1vw;
    width: 4vw;
    height: 4vw;
    padding: 0;
    margin: 0;
    font-size: xx-small;
    border: 1px solid var(--color-accent);
    border-radius: 5px;
    background-color: var(--color-primary);
    color: var(--color-accent);
  }
</style>
