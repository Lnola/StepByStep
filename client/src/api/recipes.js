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
};

const fetchAll = () => {
  return request.get(urls.listPublishedRecipes).then(extractData);
};

const fetchUserRecipes = () => {
  return request.get(urls.listUserRecipes).then(extractData);
};

export default {
  fetchAll,
  fetchUserRecipes,
};
