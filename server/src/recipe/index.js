import { list } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/list', list);

export default { router, path };
