import { list } from './category.controller';
import { Router } from 'express';

const router = Router();
const path = '/categories';
router.get('/list', list);

export default { router, path };
