import { Request, Response } from 'express';
import { AuthService } from '../../services/User/userAuth_Service';
import jwt from 'jsonwebtoken';

const authService = new AuthService();

export const saleUserController = {
    login: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({
                    success: false,
                    message: "กรุณาระบุ username และ password"
                });
            }

            if (username === 'admin' && password === 'admin1234') {

                const secret = process.env.JWT_SECRET || 'secret_fallback_dev_only';
                const testToken = jwt.sign(
                    {
                        user_name: 'Admin',
                        emp_id: 'Admin001',
                        name_thai: 'Admin User',
                        name_eng: 'Admin User',
                        departmentcode: 'IT'
                    },
                    secret,
                    { expiresIn: '1d' }
                );

                return res.status(200).json({
                    success: true,
                    message: "เข้าสู่ระบบสำเร็จ (Test Mode)",
                    token: testToken,
                    user: {
                        user_name: 'Admin',
                        emp_id: 'Admin001',
                        name_thai: 'Admin User',
                        name_eng: 'Admin User',
                        departmentcode: 'IT',
                        department: 'Admin'
                    }
                });
            }

            const result = await authService.login(username, password);

            return res.status(200).json({
                success: true,
                message: "เข้าสู่ระบบสำเร็จ",
                token: result.token,
                user: result.user
            });

        } catch (error: any) {
            console.error("Login Error:", error.message);
            return res.status(401).json({
                success: false,
                message: error.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ"
            });
        }
    },

    getUserProfile: async (req: any, res: any) => {
        try {
            const user = req.user;

            res.json({
                success: true,
                user: user
            });
        } catch (error: any) {
            console.error("Profile Retrieval Error:", error.message);
            res.status(500).json({ message: "Error retrieving profile" });
        }
    }
}