import { OK } from 'http-status';

const getCategories = (req, res, next) => {
  res.status(OK).end();
};

module.exports = { getCategories };
