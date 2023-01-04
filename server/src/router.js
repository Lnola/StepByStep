import { Router } from 'express';
import unitOfMeasurement from './unitOfMeasurement/index';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(unitOfMeasurement.path, unitOfMeasurement.router);

export default router;
