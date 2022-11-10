const TABLE_NAME = 'step_ingredients';

const createStepIngredient = (unitOfMeasurementId, ingredientId, stepId) => {
  return {
    unitOfMeasurementId,
    ingredientId,
    stepId,
  };
};

module.exports = {
  up(queryInterface) {
    const stepIngredients = [
      createStepIngredient(1, 1, 1),
      createStepIngredient(1, 2, 2),
      createStepIngredient(1, 2, 2),
      createStepIngredient(1, 2, 2),
      createStepIngredient(1, 3, 3),
      createStepIngredient(1, 5, 3),
      createStepIngredient(1, 5, 3),
      createStepIngredient(1, 3, 4),
      createStepIngredient(1, 1, 5),
      createStepIngredient(1, 4, 6),
      createStepIngredient(1, 2, 7),
      createStepIngredient(1, 4, 8),
      createStepIngredient(1, 5, 9),
      createStepIngredient(1, 1, 10),
      createStepIngredient(1, 1, 11),
      createStepIngredient(1, 3, 12),
      createStepIngredient(1, 3, 13),
      createStepIngredient(1, 5, 14),
      createStepIngredient(1, 1, 15),
      createStepIngredient(1, 2, 15),
      createStepIngredient(1, 1, 16),
      createStepIngredient(1, 1, 16),
      createStepIngredient(1, 1, 17),
      createStepIngredient(1, 3, 18),
      createStepIngredient(1, 2, 19),
      createStepIngredient(1, 1, 20),
      createStepIngredient(1, 5, 20),
      createStepIngredient(1, 2, 21),
      createStepIngredient(1, 4, 21),
      createStepIngredient(1, 1, 22),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, stepIngredients);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
