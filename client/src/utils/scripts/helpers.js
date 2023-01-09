import { recipesApi } from '@/api';
import { redirect } from '../router/routing';

export async function deleteRecipe(recipeId) {
  if (recipeId) {
    await recipesApi.deleteRecipe({ recipeId });
    redirect('UserRecipes');
  }
}

export async function togglePublish(recipeId, isPublished) {
  if (isPublished) {
    await recipesApi.unpublishRecipe({ recipeId });
    redirect('UserRecipes');
  } else if (!isPublished) {
    await recipesApi.publishRecipe({ recipeId });
    redirect('UserRecipes');
  }
  console.log(recipeId, isPublished);
}
