import { Step } from '@/shared/database/index';

const createStep = async (req, res, next) => {
  try {
    const step = await Step.create(req.body);
    res.json({ stepId: step.id });
  } catch (err) {
    next(new Error());
  }
};

export { createStep };
