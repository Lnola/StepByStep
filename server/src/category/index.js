import { fetchAll } from './category.controller';
import { Router } from 'express';

const router = Router();
const path = '/categories';

router.get('/', fetchAll);

export default { path, router };
