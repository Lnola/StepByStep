const bcrypt = require('bcrypt');

const TABLE_NAME = 'users';

const createUser = (username, roleId = 1) => {
  const password = bcrypt.hashSync('123', process.env.SALT_ROUNDS || 12);
  return {
    username,
    firstName: 'test',
    lastName: username,
    password,
    roleId,
  };
};

module.exports = {
  up(queryInterface) {
    const users = [createUser('admin', 2), createUser('user1'), createUser('user2')];
    return queryInterface.bulkInsert(TABLE_NAME, users);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
