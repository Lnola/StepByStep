import request from './request';

const extractData = res => res.data;

const fetchAll = (url) => request.get(url).then(extractData);

export { extractData, fetchAll };
