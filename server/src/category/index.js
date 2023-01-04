import { getCategories } from './category.controller';
import { Router } from 'express';

const router = Router();
const path = '/categories';

router.get('', getCategories);

module.exports = { router, path };
