import { Request, Response } from 'express';
import { GetTokenService } from '../services/getToken_service';

const getTokenService = new GetTokenService();

export class TokenController {
    async login(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body || {};
            const email = body.email;
            const password = body.password;

            if (!email || !password) {
                res.status(400).json({ message: 'Email and password are required' });
                return;
            }

            const result = await getTokenService.login({ email, password });

            res.status(200).json(result);

        } catch (error: any) {
            console.error('Login error:', error.message);

            // ✅ ปรับโครงสร้าง error ให้แสดงชัดเจนขึ้น
            res.status(500).json({
                success: false,
                message: error.response?.data?.message || error.message || 'Login failed',
            });
        }
    }
}
