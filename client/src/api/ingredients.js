import { fetchAll } from './helpers';

const urls = {
  root: '/ingredients',
};

export default { fetchAll: () => fetchAll(urls.root) };
