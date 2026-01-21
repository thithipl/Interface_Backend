import express from 'express';
import { saleUserController } from '../../controller/๊SaleUser/saleUser_controller';
import { authenticateToken } from '../../middleware/authMiddleware';

const router = express.Router();

router.post('/login', saleUserController.login);
router.get('/my-profile', authenticateToken, saleUserController.getUserProfile);

export default router;