import { Router } from 'express';
const router = Router();

import product from './product.js';
import user from './user.js';
import intro from './intro.js';


router.use('/product', product);
router.use('/user', user)
router.use('/', intro)

export default router;