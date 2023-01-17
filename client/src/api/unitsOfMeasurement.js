import { fetchAll } from './helpers';

const urls = {
  root: '/units-of-measurement',
};

export default { fetchAll: () => fetchAll(urls.root) };
