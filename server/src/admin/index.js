import { deleteUser, fetchAllUsers } from './admin.controller';
import admin from '@/shared/auth/admin';
import { Router } from 'express';

const router = Router();
const path = '/admin';

router.use(admin).get('/users', fetchAllUsers).delete('/users/:userId', deleteUser);

export default { path, router };
