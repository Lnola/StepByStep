const bcrypt = require('bcrypt');

const TABLE_NAME = 'users';

const createUser = (index, roleId = 1) => {
  const password = bcrypt.hashSync('123', process.env.SALT_ROUNDS || 12);
  return {
    username: `example${index}`,
    firstName: `test`,
    lastName: `user${index}`,
    password,
    roleId,
  };
};

module.exports = {
  up(queryInterface) {
    const users = [createUser('', 2)];
    for (let i = 1; i < 5; i++) users.push(createUser(i));
    return queryInterface.bulkInsert(TABLE_NAME, users);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
