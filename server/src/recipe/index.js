import { create, deleteRecipe, fetchByUser, fetchPublished, publishRecipe, unpublishRecipe } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .post('/delete', deleteRecipe)
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .post('/', create)
  .post('/publish', publishRecipe)
  .post('/unpublish', unpublishRecipe);

export default { path, router };
