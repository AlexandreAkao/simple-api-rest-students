import { Router } from 'express';

import studentController from '../controllers/StudentController';
import routeCatchDecorator from '../decorators/routeCatchDecorator';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', routeCatchDecorator(studentController.index));
router.get('/:id', routeCatchDecorator(studentController.show));
router.post('/', loginRequired, routeCatchDecorator(studentController.store));
router.put('/:id', loginRequired, routeCatchDecorator(studentController.update));
router.delete('/:id', loginRequired, routeCatchDecorator(studentController.delete));

export default router;
