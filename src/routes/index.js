import { Router } from 'express';

import homeRouter from './homeRoutes';
import userRouter from './userRoutes';
import tokenRouter from './tokenRoutes';

const router = Router();

router.use('/', homeRouter);
router.use('/users', userRouter);
router.use('/tokens', tokenRouter);

export default router;
