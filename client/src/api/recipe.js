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
  get remove() {
    return this.root + '/delete';
  },
};

const fetchPublished = () => {
  return request.get(urls.fetchPublished).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const remove = recipeId => {
  return request.delete(urls.remove, { data: { recipeId } });
};

export default {
  fetchPublished,
  fetchByUser,
  remove,
};
