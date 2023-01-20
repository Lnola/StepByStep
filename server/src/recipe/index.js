import { create, fetchById, fetchByUser, fetchPublished, remove, updateIsPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .get('/:id', fetchById)
  .post('/', create)
  .post('/update-published/:id', updateIsPublished)
  .delete('/:id', remove);

export default { path, router };
