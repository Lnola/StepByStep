import { create, fetchByUser, fetchPublished, remove, showRecipe, updateIsPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .get('/show-recipe/:id', showRecipe)
  .post('/', create)
  .post('/update-published/:id', updateIsPublished)
  .delete('/:id', remove);

export default { path, router };
