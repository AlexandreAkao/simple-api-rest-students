import { Router } from 'express';

import imageController from '../controllers/ImageController';
import routeCatchDecorator from '../decorators/routeCatchDecorator';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', routeCatchDecorator(imageController.index));
router.post('/', loginRequired, routeCatchDecorator(imageController.store));

export default router;
