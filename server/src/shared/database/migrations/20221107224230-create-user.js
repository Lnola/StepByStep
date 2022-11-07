module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
