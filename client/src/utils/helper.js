export const dividePublished = recipes => {
  let publishedRecipes = [];
  let unpublishedRecipes = [];
  recipes.forEach(recipe => {
    if (recipe.isPublished) publishedRecipes.push(recipe);
    else unpublishedRecipes.push(recipe);
  });
  return [publishedRecipes, unpublishedRecipes];
};
