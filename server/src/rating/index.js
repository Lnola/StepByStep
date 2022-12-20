import { ratings } from './rating.controller';
import { Router } from 'express';

const router = Router();
const path = '/ratings';
router.get('/list', ratings);

export default { router, path };
