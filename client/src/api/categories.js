import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/categories',
  get list() {
    return this.root + '/list';
  },
};

const fetchAll = () => {
  return request.get(urls.list).then(extractData);
};

export default {
  fetchAll,
};
