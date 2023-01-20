import {
  create,
  fetchById,
  fetchByUser,
  fetchPublished,
  fetchStepsByRecipeId,
  remove,
  updateIsPublished,
} from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .get('/:id', fetchById)
  .get('/:id/steps', fetchStepsByRecipeId)
  .post('/', create)
  .post('/update-published/:id', updateIsPublished)
  .delete('/:id', remove);

export default { path, router };
