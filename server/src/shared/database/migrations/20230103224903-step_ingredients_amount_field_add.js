const TABLE_NAME = 'step_ingredients';
const FIELD_NAME = 'amount';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(TABLE_NAME, FIELD_NAME, {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn(TABLE_NAME, FIELD_NAME)]);
  },
};
