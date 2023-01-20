import { create } from './rating.controller';
import { Router } from 'express';

const router = Router();
const path = '/ratings';

router.post('/', create);

export default { path, router };