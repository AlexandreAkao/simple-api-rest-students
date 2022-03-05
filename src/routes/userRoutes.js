import { Router } from 'express';

import userController from '../controllers/UserController';
import routeCatchDecorator from '../decorators/routeCatchDecorator';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', routeCatchDecorator(userController.index));
router.get('/:id', routeCatchDecorator(userController.show));
router.put('/', loginRequired, routeCatchDecorator(userController.update));
router.delete('/', loginRequired, routeCatchDecorator(userController.delete));
router.post('/', routeCatchDecorator(userController.store));

export default router;
