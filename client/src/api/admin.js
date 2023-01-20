import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/admin',
  get fetchAllUsers() {
    return this.root + '/users';
  },
  removeUser(userId) {
    return `${this.root}/users/${userId}`;
  },
};

const fetchAllUsers = () => {
  return request.get(urls.fetchAllUsers).then(extractData);
};

const removeUser = userId => {
  return request.delete(urls.removeUser(userId));
};

export default { fetchAllUsers, removeUser };
