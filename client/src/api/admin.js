import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/admin',
  deleteUser(userId) {
    return `${this.root}/${userId}`;
  },
};

const allUsers = () => {
  return request.get(urls.root).then(extractData);
};

const deleteUser = userId => {
  return request.delete(urls.deleteUser(userId));
};

export default { allUsers, deleteUser };
