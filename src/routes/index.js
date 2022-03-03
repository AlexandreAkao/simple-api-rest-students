import { Router } from 'express';

import homeRouter from './homeRoutes';
import userRouter from './userRoutes';

const router = Router();

router.use('/', homeRouter);
router.use('/users', userRouter);

export default router;
