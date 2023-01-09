import {
  createRecipe,
  deleteRecipe,
  listPublishedRecipes,
  listUserRecipes,
  publishRecipe,
  unpublishRecipe,
} from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router
  .get('/published', listPublishedRecipes)
  .get('/userRecipes', listUserRecipes)
  .post('/', createRecipe)
  .post('/delete', deleteRecipe)
  .post('/publish', publishRecipe)
  .post('/unpublish', unpublishRecipe);

export default { path, router };
