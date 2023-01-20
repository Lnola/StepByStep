<script>
  import { onMount } from 'svelte';
  import { recipeApi } from '@/api';
  import { redirect } from '@/utils/router/routing';
  import { commentApi } from '@/api';

  let recipe;
  let name;
  let description;
  let cover;
  let rating;
  let prepTime;
  let comments;

  onMount(async () => {
    let path = window.location.pathname;
    let recipeId = path.substring(path.lastIndexOf('/') + 1);
    recipe = await recipeApi.fetchById(recipeId);
    name = recipe.name;
    description = recipe.description;
    cover = recipe.imageUrl;
    rating = recipe.avgRating;
    prepTime = recipe.preparationTime;
    comments = await commentApi.fetchByRecipe();
  });

  function reproduction() {
    // window.location = '/recipes/show-recipe/' + recipeId;
  }

  const grades = ['very bad', 'bad', 'good', 'very good', 'excellent'];
  let selected = "";

  function saveRate() {
    if(comment.value.length == 0) {
			alert("Comment is not added.")
		}
		else if(selected == "") {
			alert("Rate is not selected.")
		}
		else {
			//dodati spremanje u bazu
			alert("Feedback is sent.")
		}
  }
</script>

<main>
  <div class="cover">
    <img alt="recipeCover" src={cover} />
    <button class="play-button fa-solid fa-play" on:click={reproduction} />
  </div>
  <div class="title">{name}</div>
  <div class="container">
    <div class="time">{prepTime}min</div>
    <div class="rating">{rating}</div>
  </div>
  <div class="description">{description}</div>
  <div class="comments">
    <label class="title">Comments</label>
    {#each comments as comment}
      <div class="comment">
        <label>{comment.text}</label>
      </div>
    {/each}
  </div>
  <div class="feedback">
    <textarea id="comment" placeholder="Leave a comment."></textarea>
    {#each grades as grade}
      <label>
        <input type="radio" value={grade} bind:group={selected}>
        {grade}
      </label>
    {/each}
    <button on:click={saveRate}>Send feedback</button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 84vh;
    margin-top: 8vh;
    margin-bottom: 8vh;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .container {
    display: flex;
    justify-content: space-around;
    flex-direction: auto auto;
  }

  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .description {
    text-align: justify;
    font-size: medium;
    padding-left: 7px;
    padding-right: 7px;
  }

  .play-button {
    width: 100%;
    height: 75px;
    border: solid var(--color-accent) 2px;
    background-color: var(--color-primary);
  }

  .play-button:hover {
    background-color: var(--color-secondary);
  }
</style>
