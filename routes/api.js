import { Router } from 'express';
const router = Router();

import product from './product.js';
import user from './user.js';


router.use('/product', product);
router.use('/user', user)

export default router;