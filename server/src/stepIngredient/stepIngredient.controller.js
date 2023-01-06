import { StepIngredient } from '@/shared/database/index';

const newStepIngredient = async (req, res, next) => {
  try {
    console.log(req.body);
    const stepIngredient = await StepIngredient.create(req.body);

    res.json({ stepIngredientId: stepIngredient.id });
  } catch (err) {
    next(new Error());
  }
};

module.exports = { newStepIngredient };
