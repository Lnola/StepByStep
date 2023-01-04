import category from './category/index';
import { Router } from 'express';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(category.path, category.router);

export default router;
