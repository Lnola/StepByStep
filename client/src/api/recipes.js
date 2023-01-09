import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
  get listPublishedRecipes() {
    return this.root + '/published';
  },
  get listUserRecipes() {
    return this.root + '/userRecipes';
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
  return request.get(urls.listPublishedRecipes).then(extractData);
};

const fetchUserRecipes = () => {
  return request.get(urls.listUserRecipes).then(extractData);
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
  fetchUserRecipes,
  deleteRecipe,
  publishRecipe,
  unpublishRecipe,
};
