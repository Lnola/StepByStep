const TABLE_NAME = 'step_ingredients';

const createStepIngredient = (amount, unitOfMeasurementId, ingredientId, stepId) => {
  return {
    amount,
    unitOfMeasurementId,
    ingredientId,
    stepId,
  };
};

module.exports = {
  up(queryInterface) {
    const stepIngredients = [
      createStepIngredient(50, 1, 1, 1),
      createStepIngredient(50, 1, 2, 2),
      createStepIngredient(50, 1, 2, 2),
      createStepIngredient(50, 1, 2, 2),
      createStepIngredient(50, 1, 3, 3),
      createStepIngredient(50, 1, 5, 3),
      createStepIngredient(50, 1, 5, 3),
      createStepIngredient(50, 1, 3, 4),
      createStepIngredient(50, 1, 1, 5),
      createStepIngredient(100, 1, 4, 6),
      createStepIngredient(100, 1, 2, 7),
      createStepIngredient(100, 1, 4, 8),
      createStepIngredient(100, 1, 5, 9),
      createStepIngredient(100, 1, 1, 10),
      createStepIngredient(100, 1, 1, 11),
      createStepIngredient(20, 1, 3, 12),
      createStepIngredient(20, 1, 3, 13),
      createStepIngredient(20, 1, 5, 14),
      createStepIngredient(20, 1, 1, 15),
      createStepIngredient(35, 1, 2, 15),
      createStepIngredient(35, 1, 1, 16),
      createStepIngredient(35, 1, 1, 16),
      createStepIngredient(35, 1, 1, 17),
      createStepIngredient(35, 1, 3, 18),
      createStepIngredient(35, 1, 2, 19),
      createStepIngredient(35, 1, 1, 20),
      createStepIngredient(35, 1, 5, 20),
      createStepIngredient(35, 1, 2, 21),
      createStepIngredient(35, 1, 4, 21),
      createStepIngredient(35, 1, 1, 22),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, stepIngredients);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
