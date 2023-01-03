import { OK } from 'http-status';
import { Recipe } from '@/shared/database/index';

const list = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        isPublished: true,
      },
    });
    return res.status(OK).json(recipes);
  } catch (err) {
    console.log(err);
    return next(new Error());
  }
};

export { list };
