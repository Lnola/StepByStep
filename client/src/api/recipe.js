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
  get togglePublishRecipe() {
    return this.root + '/togglePublish';
  },
};

const fetchPublished = () => {
  return request.get(urls.fetchPublished).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const togglePublishRecipe = (recipeId, isPublished) => {
  return request.post(urls.togglePublishRecipe, { recipeId, isPublished }).then(extractData);
};

const remove = id => {
  return request.delete(urls.remove(id));
};

export default {
  fetchPublished,
  fetchByUser,
  togglePublishRecipe,
  remove,
};
