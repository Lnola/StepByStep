import { create, fetchByRecipe, fetchByUser, remove, updateIsPublished } from './comment.controller';
import { Router } from 'express';

const router = Router();
const path = '/comments';

router
  .get('/recipe', fetchByRecipe)
  .get('/user', fetchByUser)
  .post('/', create)
  .post('/update-published/:id', updateIsPublished)
  .delete('/:id', remove);

export default { path, router };
