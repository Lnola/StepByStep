const TABLE_NAME = 'roles';

const createRole = name => {
  return { name };
};

module.exports = {
  up(queryInterface) {
    const roles = [createRole('user'), createRole('admin')];
    return queryInterface.bulkInsert(TABLE_NAME, roles);
  },
  down(queryInterface) {
    return queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
