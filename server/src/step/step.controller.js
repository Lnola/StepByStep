import { OK } from 'http-status';
import { Step } from '@/shared/database/index';

const create = async (req, res, next) => {
  try {
    const step = await Step.create(req.body);
    return res.status(OK).json({ stepId: step.id });
  } catch (err) {
    return next(new Error());
  }
};

export { create };
