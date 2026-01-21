import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No Token Provided' });
    }

    try {
        const secret = process.env.JWT_SECRET || 'secret_fallback_dev_only';

        const decoded = jwt.verify(token, secret);

        (req as any).user = decoded;
        next();

    } catch (err: any) {
        console.log('Result: Token Error ->', err.message);
        return res.status(401).json({
            message: 'Session Expired',
            error: err.message
        });
    }
};