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
  removeComment(commentId) {
    return `${this.root}/comment/${commentId}`;
  },
};

const fetchAllUsers = () => {
  return request.get(urls.fetchAllUsers).then(extractData);
};

const removeUser = userId => {
  return request.delete(urls.removeUser(userId));
};

const removeComment = commentId => {
  return request.delete(urls.removeComment(commentId));
};

export default { fetchAllUsers, removeComment, removeUser };
