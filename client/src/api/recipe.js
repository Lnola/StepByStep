import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/recipes',
  get fetchPublished() {
    return this.root + '/published';
  },
  get fetchByUser() {
    return this.root + '/user';
  },
  remove(id) {
    return `${this.root}/${id}`;
  },
  updateIsPublished(id) {
    return `${this.root}/update-published/${id}`;
  },
  fetchById(id) {
    return `${this.root}/${id}`;
  },
  fetchStepsByRecipeId(id) {
    return `${this.root}/${id}/steps`;
}
};

const fetchPublished = () => {
  return request.get(urls.fetchPublished).then(extractData);
};

const fetchByUser = () => {
  return request.get(urls.fetchByUser).then(extractData);
};

const updateIsPublished = (id, isPublished) => {
  return request.post(urls.updateIsPublished(id), { isPublished });
};

const remove = id => {
  return request.delete(urls.remove(id));
};

const fetchById = (id) => {
  return request.get(urls.fetchById(id)).then(extractData);
};

const fetchStepsByRecipeId = (id) => {
  return request.get(urls.fetchStepsByRecipeId(id)).then(extractData);
}

export default {
  fetchPublished,
  fetchByUser,
  updateIsPublished,
  remove,
  fetchById,
  fetchStepsByRecipeId,
};
