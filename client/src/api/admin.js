import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/admin',
  get fetchAllUsers() {
    return this.root + '/users';
  },
  deleteUser(userId) {
    return `${this.root}/users/${userId}`;
  },
};

const fetchAllUsers = () => {
  return request.get(urls.fetchAllUsers).then(extractData);
};

const deleteUser = userId => {
  return request.delete(urls.deleteUser(userId));
};

export default { fetchAllUsers, deleteUser };
