import { Router } from 'express';
import step from './step/index';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(step.path, step.router);

export default router;
