import { list } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/browse', list);

export default { router, path };
