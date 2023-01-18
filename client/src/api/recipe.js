import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
  get fetchPublished() {
    return this.root + '/published';
  },
  get fetchByUser() {
    return this.root + '/user';
  },
  remove(id) {
    return `${this.root}/${id}`;
  },
};

const fetchPublished = () => {
  return request.get(urls.fetchPublished).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const remove = id => {
  return request.delete(urls.remove(id));
};

export default {
  fetchPublished,
  fetchByUser,
  remove,
};
