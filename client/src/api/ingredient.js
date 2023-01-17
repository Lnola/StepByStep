import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/ingredients',
};

const fetchAll = () => {
  return request.get(urls.root).then(extractData);
};

export default { fetchAll };
