import { recipesApi } from '@/api';
import { redirect } from '../router/routing';

export async function deleteRecipe(recipeId) {
  if (recipeId) {
    await recipesApi.deleteRecipe({ recipeId });
    redirect('UserRecipes');
  }
}
