const TABLE_NAME = 'step_ingredients';

const createStepIngredient = (unitOfMeasurementId, amount, ingredientId, stepId) => {
  return {
    unitOfMeasurementId,
    amount,
    ingredientId,
    stepId,
  };
};

module.exports = {
  up(queryInterface) {
    const stepIngredients = [
      createStepIngredient(1, 50, 1, 1),
      createStepIngredient(1, 50, 2, 2),
      createStepIngredient(1, 50, 2, 2),
      createStepIngredient(1, 50, 2, 2),
      createStepIngredient(1, 50, 3, 3),
      createStepIngredient(1, 50, 5, 3),
      createStepIngredient(1, 50, 5, 3),
      createStepIngredient(1, 50, 3, 4),
      createStepIngredient(1, 50, 1, 5),
      createStepIngredient(1, 100, 4, 6),
      createStepIngredient(1, 100, 2, 7),
      createStepIngredient(1, 100, 4, 8),
      createStepIngredient(1, 100, 5, 9),
      createStepIngredient(1, 100, 1, 10),
      createStepIngredient(1, 100, 1, 11),
      createStepIngredient(1, 20, 3, 12),
      createStepIngredient(1, 20, 3, 13),
      createStepIngredient(1, 20, 5, 14),
      createStepIngredient(1, 20, 1, 15),
      createStepIngredient(1, 35, 2, 15),
      createStepIngredient(1, 35, 1, 16),
      createStepIngredient(1, 35, 1, 16),
      createStepIngredient(1, 35, 1, 17),
      createStepIngredient(1, 35, 3, 18),
      createStepIngredient(1, 35, 2, 19),
      createStepIngredient(1, 35, 1, 20),
      createStepIngredient(1, 35, 5, 20),
      createStepIngredient(1, 35, 2, 21),
      createStepIngredient(1, 35, 4, 21),
      createStepIngredient(1, 35, 1, 22),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, stepIngredients);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
