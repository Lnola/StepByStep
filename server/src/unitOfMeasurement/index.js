import getUnitsOfMeasurement from './unitOfMeasurement.controller';
import { Router } from 'express';

const router = Router();
const path = '/units-of-measurement';

router.get('', getUnitsOfMeasurement);

module.exports = { router, path };
