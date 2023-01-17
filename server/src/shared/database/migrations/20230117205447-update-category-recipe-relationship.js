const RECIPES = 'recipes';
const CATEGORIES = 'categories';
const RECIPE_CATEGORY = 'recipe_categories';
const CATEGORY_ID = 'categoryId';

module.exports = {
  up(queryInterface, Sequelize) {
    const removeCategoryIdFromRecipes = queryInterface.removeColumn(RECIPES, CATEGORY_ID);
    const createRecipeCategory = queryInterface.createTable(RECIPE_CATEGORY, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: RECIPES,
          },
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: CATEGORIES,
          },
          key: 'id',
        },
      },
    });
    return Promise.all([removeCategoryIdFromRecipes, createRecipeCategory]);
  },

  down(queryInterface, Sequelize) {
    const addCategoryIdToRecipe = queryInterface.addColumn(RECIPES, CATEGORY_ID, {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    const dropCreateRecipeCategory = queryInterface.dropTable(RECIPE_CATEGORY);
    return Promise.all([addCategoryIdToRecipe, dropCreateRecipeCategory]);
  },
};
