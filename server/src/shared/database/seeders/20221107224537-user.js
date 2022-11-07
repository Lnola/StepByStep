module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('users', [{ password: '123' }]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
