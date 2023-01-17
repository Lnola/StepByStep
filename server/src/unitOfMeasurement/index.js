import { fetchAll } from './unitOfMeasurement.controller';
import { Router } from 'express';

const router = Router();
const path = '/units-of-measurement';

router.get('/', fetchAll);

export default { router, path };
