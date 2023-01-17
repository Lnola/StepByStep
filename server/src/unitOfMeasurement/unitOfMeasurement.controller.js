import { UnitOfMeasurement } from '@/shared/database/index';

const fetchAll = async (_, res) => {
  const unitsOfMeasurement = await UnitOfMeasurement.findAll();
  return res.json(unitsOfMeasurement);
};

export { fetchAll };
