import { create, fetchByUser, fetchPublished, remove, updateIsPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router
  .get('/published', fetchPublished)
  .get('/user', fetchByUser)
  .post('/', create)
  .post('/togglePublish', updateIsPublished)
  .delete('/:id', remove);

export default { path, router };
