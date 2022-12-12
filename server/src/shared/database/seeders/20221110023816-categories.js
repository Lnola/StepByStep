const TABLE_NAME = 'categories';

const createCategory = name => {
  return { name };
};

module.exports = {
  up(queryInterface) {
    const categories = [
      createCategory('cookie'),
      createCategory('cake'),
      createCategory('fish'),
      createCategory('meat'),
      createCategory('vegetables'),
      createCategory('asian'),
      createCategory('italian'),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, categories);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
