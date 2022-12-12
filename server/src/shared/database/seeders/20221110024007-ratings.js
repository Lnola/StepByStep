const TABLE_NAME = 'ratings';

const createRating = (value, recipeId) => {
  return {
    value,
    userId: 1,
    recipeId,
  };
};

module.exports = {
  up(queryInterface) {
    const ratings = [createRating(5, 1), createRating(3, 2), createRating(1, 3)];
    return queryInterface.bulkInsert(TABLE_NAME, ratings);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
