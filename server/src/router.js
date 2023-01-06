import { Router } from 'express';

// eslint-disable-next-line sort-imports
import category from './category/index';
import ingredient from './ingredient/index';
import user from './user/index';

const router = Router();

router.use(category.path, category.router);
router.use(ingredient.path, ingredient.router);
router.use(user.path, user.router);

export default router;
