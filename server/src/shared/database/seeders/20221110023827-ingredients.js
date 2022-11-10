const TABLE_NAME = 'ingredients';

const createIngredient = name => {
  return { name };
};

module.exports = {
  up(queryInterface) {
    const ingredients = [
      createIngredient('flour'),
      createIngredient('water'),
      createIngredient('egg'),
      createIngredient('eggs'),
      createIngredient('cabbage'),
      createIngredient('chicken breast'),
      createIngredient('cheese'),
      createIngredient('ham'),
      createIngredient('banana'),
      createIngredient('salt'),
      createIngredient('pepper'),
    ];
    return queryInterface.bulkInsert(TABLE_NAME, ingredients);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
