import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
  get browse() {
    return this.root + '/browse';
  },
};

const browse = () => {
  return request.get(urls.browse).then(extractData);
};

export default {
  browse,
};
