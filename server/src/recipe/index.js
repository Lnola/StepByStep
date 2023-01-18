import { create, fetchByUser, fetchPublished, publishRecipe, remove, unpublishRecipe } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .post('/', create)
  .post('/publish', publishRecipe)
  .post('/unpublish', unpublishRecipe)
  .delete('/:id', remove);

export default { path, router };
