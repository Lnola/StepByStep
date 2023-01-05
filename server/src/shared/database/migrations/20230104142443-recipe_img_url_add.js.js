const TABLE_NAME = 'recipes';
const FIELD_NAME = 'imageUrl';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(TABLE_NAME, FIELD_NAME, {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn(TABLE_NAME, FIELD_NAME)]);
  },
};
