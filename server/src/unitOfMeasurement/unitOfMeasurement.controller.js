import { UnitOfMeasurement } from '@/shared/database/index';

const getUnitsOfMeasurement = async (_, res) => {
  const unitsOfMeasurement = await UnitOfMeasurement.findAll();
  return res.json(unitsOfMeasurement);
};

export { getUnitsOfMeasurement };
