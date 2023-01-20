import { Step, StepIngredient } from '@/shared/database/index';
import { OK } from 'http-status';

const create = async (req, res, next) => {
  try {
    const steps = await Step.bulkCreate(req.body.map(step => step.data));

    const data = [];
    req.body.forEach((step, index) => {
      step.ingredients.forEach(ingredient => {
        data.push({ ...ingredient, stepId: steps[index].dataValues.id });
      });
    });

    await StepIngredient.bulkCreate(data);
    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

export { create };
