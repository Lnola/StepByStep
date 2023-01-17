const TABLE_NAME = 'recipe_categories';

const createRecipeCategory = (recipeId, categoryId) => {
  return { recipeId, categoryId };
};

module.exports = {
  up(queryInterface) {
    const recipeCategories = [
      createRecipeCategory(1, 4),
      createRecipeCategory(1, 5),
      createRecipeCategory(2, 7),
      createRecipeCategory(3, 4),
      createRecipeCategory(3, 8),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, recipeCategories);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
