import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/units-of-measurement',
  get getUnitsOfMeasurement() {
    return this.root;
  }
};

const getUnitsOfMeasurement = () => {
  return request.get(urls.getUnitsOfMeasurement).then(extractData);
}

export default { getUnitsOfMeasurement };
