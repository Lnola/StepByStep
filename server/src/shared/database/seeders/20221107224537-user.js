const bcrypt = require('bcrypt');

const TABLE_NAME = 'users';

const createUser = index => {
  const password = bcrypt.hashSync('123', process.env.SALT_ROUNDS || 12);
  return {
    username: `example${index}`,
    password,
  };
};

module.exports = {
  up(queryInterface) {
    const users = [createUser('')];
    for (let i = 1; i < 5; i++) users.push(createUser(i));
    return queryInterface.bulkInsert(TABLE_NAME, users);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
