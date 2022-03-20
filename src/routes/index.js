import { Router } from 'express';

import userRouter from './userRoutes';
import tokenRouter from './tokenRoutes';
import studentRouter from './studentRoutes';
import imageRouter from './imageRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/tokens', tokenRouter);
router.use('/students', studentRouter);
router.use('/images', imageRouter);

export default router;
