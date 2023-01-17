import { recipeApi } from '@/api';
import { redirect } from '../router/routing';

export async function deleteRecipe(recipeId) {
  if (recipeId) {
    await recipeApi.deleteRecipe({ recipeId });
    redirect('UserRecipes');
  }
}
