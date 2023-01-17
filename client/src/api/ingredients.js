import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/ingredients',
  get getIngredients() {
    return this.root;
  }
};

const getIngredients = () => {
  return request.get(urls.getIngredients).then(extractData);
}

export default { getIngredients };
