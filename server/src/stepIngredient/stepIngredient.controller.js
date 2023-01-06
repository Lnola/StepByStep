import { StepIngredient } from '@/shared/database/index';

const createStepIngredient = async (req, res, next) => {
  try {
    const stepIngredient = await StepIngredient.create(req.body);
    res.json({ stepIngredientId: stepIngredient.id });
  } catch (err) {
    next(new Error());
  }
};

export { createStepIngredient };
