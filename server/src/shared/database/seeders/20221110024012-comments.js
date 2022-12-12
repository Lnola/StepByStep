const TABLE_NAME = 'comments';

const createComment = (userId, recipeId) => {
  return {
    text: 'Great recipe, thanks for sharing!',
    createdAt: new Date(),
    userId,
    recipeId,
  };
};

module.exports = {
  up(queryInterface) {
    const comments = [createComment(1, 1), createComment(2, 2), createComment(3, 2)];
    return queryInterface.bulkInsert(TABLE_NAME, comments);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
