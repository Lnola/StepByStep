import { fetchAll } from './ingredient.controller';
import { Router } from 'express';

const router = Router();
const path = '/ingredients';

router.get('/', fetchAll);

export default { path, router };
