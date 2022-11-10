const TABLE_NAME = 'units_of_measurement';

const createUnitOfMeasurement = (name, abbreviation) => {
  return { name, abbreviation };
};

module.exports = {
  up(queryInterface) {
    const unitsOfMeasurement = [
      createUnitOfMeasurement('kilogram', 'kg'),
      createUnitOfMeasurement('gram', 'g'),
      createUnitOfMeasurement('liter', 'l'),
      createUnitOfMeasurement('milliliter', 'ml'),
      createUnitOfMeasurement('cup'),
      createUnitOfMeasurement('table-spoon'),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, unitsOfMeasurement);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
