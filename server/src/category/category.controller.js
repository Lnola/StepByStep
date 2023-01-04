import { Category } from '@/shared/database/index';

const getCategories = async (_, res) => {
  const categories = await Category.findAll();

  res.json(categories);
};

module.exports = { getCategories };
