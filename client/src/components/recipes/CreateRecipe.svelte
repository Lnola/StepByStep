<script>

    const categories = [
        {
            id: 1,
            name: "meat"
        },
        {
            id: 2,
            name: "italian"
        }
    ]

    const handleFormSubmit = (e) => {
        console.log(e);
    }

</script>

<h2>Create recipe</h2>
<form on:submit|preventDefault={handleFormSubmit}>
    <label for="name">Recipe name: </label>
    <input name="name" placeholder="recipe name"/>

    <label for="description">Recipe description: </label>
    <input type="textbox" name="description"/>

    <input type="radio" name="isPublished" value="false" />Private
    <input type="radio" name="isPublished" value="true" />Public

    <select name="categoryId">
        <option selected disabled value="">Select category</option>
        {#each categories as category }
            <option value={category.id}>{category.name}</option>
        {/each}
    </select>
</form>

<style>
    
</style>
