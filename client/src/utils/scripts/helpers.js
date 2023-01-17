import { recipeApi } from '@/api';
import { redirect } from '../router/routing';

export async function deleteRecipe(recipeId) {
  if (recipeId) {
    await recipeApi.deleteRecipe({ recipeId });
    redirect('UserRecipes');
  }
}

export async function togglePublish(recipeId, isPublished) {
  if (isPublished) {
    await recipeApi.unpublishRecipe({ recipeId });
    redirect('UserRecipes');
  } else if (!isPublished) {
    await recipeApi.publishRecipe({ recipeId });
    redirect('UserRecipes');
  }
  console.log(recipeId, isPublished);
}
