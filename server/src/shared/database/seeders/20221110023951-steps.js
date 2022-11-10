const TABLE_NAME = 'steps';

const createStep = (index, time, recipeId) => {
  return {
    description: `Step#${index} description`,
    time,
    orderNumber: index,
    recipeId,
  };
};

module.exports = {
  up(queryInterface) {
    const steps = [
      createStep(1, '00:05:00', 1),
      createStep(2, '00:05:00', 1),
      createStep(3, '00:05:00', 1),
      createStep(4, '00:05:00', 1),
      createStep(5, '00:05:00', 1),
      createStep(6, '00:05:00', 1),
      createStep(7, '00:05:00', 1),
      createStep(8, '00:05:00', 1),
      createStep(9, '00:05:00', 1),
      createStep(10, '00:05:00', 1),
      createStep(11, '00:05:00', 1),
      createStep(12, '00:05:00', 1),
      createStep(13, '00:05:00', 1),
      createStep(14, '00:05:00', 1),
      createStep(15, '00:05:00', 2),
      createStep(1, '00:05:30', 2),
      createStep(2, '00:03:45', 2),
      createStep(3, '00:23:30', 2),
      createStep(4, '00:05:00', 2),
      createStep(1, '00:05:54', 3),
      createStep(2, '00:05:03', 3),
      createStep(3, '00:12:00', 3),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, steps);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
