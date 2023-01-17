import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/ingredients',
  get fetchAll() {
    return this.root;
  },
};

const fetchAll = () => {
  return request.get(urls.fetchAll).then(extractData);
};

export default { fetchAll };
