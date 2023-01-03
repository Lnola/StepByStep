import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
  get listPublishedRecipes() {
    return this.root + '/listPublishedRecipes';
  },
};

const fetchAll = () => {
  return request.get(urls.listPublishedRecipes).then(extractData);
};

export default {
  fetchAll,
};
