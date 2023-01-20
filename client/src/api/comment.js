import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/comments',
  fetchByRecipe(recipeId) {
    return `${this.root}/recipe/${recipeId}`;
  },
};

const fetchByRecipe = recipeId => {
  return request.get(urls.fetchByRecipe(recipeId)).then(extractData);
};

const create = (params = {}) => {
  console.log(params);
  return request.post(urls.root, params);
};

export default {
  fetchByRecipe,
  create,
};
