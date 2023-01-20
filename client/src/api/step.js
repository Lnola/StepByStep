import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/steps',
  get create() {
    return this.root;
  },
};

const create = step => {
  return request.post(urls.create, step).then(extractData);
};

export default {
  create,
};
