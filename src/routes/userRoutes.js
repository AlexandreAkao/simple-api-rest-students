import { Router } from 'express';

import userController from '../controllers/UserController';
import routeCatchDecorator from '../decorators/routeCatchDecorator';

const router = Router();

router.get('/', routeCatchDecorator(userController.index));
router.get('/:id', routeCatchDecorator(userController.show));
router.put('/:id', routeCatchDecorator(userController.update));
router.delete('/:id', routeCatchDecorator(userController.delete));
router.post('/', routeCatchDecorator(userController.store));

export default router;
