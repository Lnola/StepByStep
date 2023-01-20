import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/ratings',
};

const fetchAll = () => {
  return request.get(urls.root).then(extractData);
};

export default {
  fetchAll,
};