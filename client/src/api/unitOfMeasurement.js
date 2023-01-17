import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/units-of-measurement',
  get fetchAll() {
    return this.root;
  },
};

const fetchAll = () => {
  return request.get(urls.fetchAll).then(extractData);
};

export default { fetchAll };
