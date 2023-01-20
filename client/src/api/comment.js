import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/comments',
  fetchByRecipe(recipeId) {
    return `${this.root}/recipe/${recipeId}`;
  },
  get fetchByUser() {
    return this.root + '/user';
  },
  remove(id) {
    return `${this.root}/${id}`;
  },
  updateIsPublished(id) {
    return `${this.root}/update-published/${id}`;
  },
};

const fetchByRecipe = recipeId => {
  return request.get(urls.fetchByRecipe(recipeId)).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const updateIsPublished = (id, isPublished) => {
  return request.post(urls.updateIsPublished(id), { isPublished });
};

const remove = id => {
  return request.delete(urls.remove(id));
};

export default {
  fetchByRecipe,
  fetchByUser,
  updateIsPublished,
  remove,
};
