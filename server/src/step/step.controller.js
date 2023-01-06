import { Step } from '@/shared/database/index';

const newStep = async (req, res, next) => {
  try {
    const step = await Step.create(req.body);
    res.json({ stepId: step.id });
  } catch (err) {
    next(new Error());
  }
};

export { newStep };
