const TABLE_NAME = 'recipes';

const createRecipe = (index, isPublished = false) => {
  return {
    name: `Recipe#${index}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    isPublished,
    publishedAt: isPublished ? new Date() : null,
    createdAt: new Date(),
    userId: 1,
    categoryId: index,
  };
};

module.exports = {
  up(queryInterface) {
    const recipes = [createRecipe(1, true), createRecipe(2), createRecipe(3)];
    return queryInterface.bulkInsert(TABLE_NAME, recipes);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
