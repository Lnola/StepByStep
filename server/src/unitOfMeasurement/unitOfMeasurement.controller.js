import { OK } from 'http-status';
import { UnitOfMeasurement } from '@/shared/database/index';

const fetchAll = async (_req, res, next) => {
  try {
    const unitsOfMeasurement = await UnitOfMeasurement.findAll();
    return res.status(OK).json(unitsOfMeasurement);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchAll };
