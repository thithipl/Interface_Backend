import { Router } from 'express';
import { TokenController } from '../controller/token_controller';

const router = Router();
const controller = new TokenController();

router.post('/getToken', (req, res) => controller.login(req, res));

export default router;
