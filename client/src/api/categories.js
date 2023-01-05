import { fetchAll } from './helpers';

const urls = {
  root: '/categories',
};

export default { fetchAll: () => fetchAll(urls.root) };
