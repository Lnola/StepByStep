import { fetchAllUsers, removeComment, removeUser } from './admin.controller';
import admin from '@/shared/auth/admin';
import { Router } from 'express';

const router = Router();
const path = '/admin';

router
  .use(admin)
  .get('/users', fetchAllUsers)
  .delete('/users/:userId', removeUser)
  .delete('/comment/:commentId', removeComment);

export default { path, router };
