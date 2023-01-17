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
  get deleteRecipe() {
    return this.root + '/delete';
  },
  get publishRecipe() {
    return this.root + '/publish';
  },
  get unpublishRecipe() {
    return this.root + '/unpublish';
  },
};

const fetchPublished = () => {
  return request.get(urls.fetchPublished).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const deleteRecipe = recipeId => {
  return request.post(urls.deleteRecipe, recipeId).then(extractData);
};

const publishRecipe = recipeId => {
  return request.post(urls.publishRecipe, recipeId).then(extractData);
};

const unpublishRecipe = recipeId => {
  return request.post(urls.unpublishRecipe, recipeId).then(extractData);
};

export default {
  fetchPublished,
  fetchByUser,
  deleteRecipe,
  publishRecipe,
  unpublishRecipe,
};
