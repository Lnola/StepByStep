import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
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
