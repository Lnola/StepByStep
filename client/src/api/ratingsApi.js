import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/ratings',
  get rating() {
    return this.root + '/list';
  },
};


const rating = () => {
  return request.get(urls.rating).then(extractData);
};

export default {
  rating,
};
