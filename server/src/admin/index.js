import { allUsers, deleteUser } from './admin-controller';
import { Router } from 'express';

const router = Router();
const path = '/admin';

router.get('/', allUsers).delete('/:userId', deleteUser);

export default { path, router };
