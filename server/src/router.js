import categories from './category/index';
import recipes from './recipe/index';
import { Router } from 'express';
import user from './user/index';

const router = Router();
router.use(user.path, user.router);
router.use(recipes.path, recipes.router);
router.use(categories.path, categories.router);

export default router;
