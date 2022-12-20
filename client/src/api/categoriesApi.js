import { extractData } from './helpers';
import request from './request';

const urls = {
    root: '/categories',
    get categories() {
      return this.root + '/list';
    },
  };
  
  
  const categories = () => {
    return request.get(urls.categories).then(extractData);
  };
  
  export default {
    categories,
  };
  