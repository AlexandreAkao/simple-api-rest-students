import { Router } from 'express';

import homeRouter from './homeRoutes';
import userRouter from './userRoutes';
import tokenRouter from './tokenRoutes';
import studentRouter from './studentRoutes';

const router = Router();

router.use('/', homeRouter);
router.use('/users', userRouter);
router.use('/tokens', tokenRouter);
router.use('/students', studentRouter);

export default router;
