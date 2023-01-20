import { allUsers, deleteUser } from './admin.controller';
import admin from '@/shared/auth/admin';
import { Router } from 'express';

const router = Router();
const path = '/admin';

router.use(admin).get('/', allUsers).delete('/:userId', deleteUser);

export default { path, router };
