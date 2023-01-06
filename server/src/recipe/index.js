import { listPublishedRecipes, listUserRecipes, newRecipe } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/published', listPublishedRecipes).get('/userRecipes', listUserRecipes).post('', newRecipe);

export default { router, path };
