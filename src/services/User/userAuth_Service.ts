import jwt from 'jsonwebtoken';
import { SaleUserModel } from '../../models/m_users/m_sale_user';
import dotenv from 'dotenv';

dotenv.config();

export class AuthService {
    private readonly saleUserModel = new SaleUserModel();
    private encryptLegacy(password: string): string {
        const upperPass = password.toUpperCase();
        const offsets = [
            5, 7, 9, 4,
            -2, 1, -6, -8,
            -3, 4, -5, 7,
            -2, -1, -9, -1,
            -3, -5, 7, 9
        ];

        let result = "";

        for (let i = 0; i < upperPass.length; i++) {
            let codePoint = upperPass.charCodeAt(i);

            if (i < offsets.length) {
                codePoint = codePoint + offsets[i]!;
            }
            result += String.fromCodePoint(codePoint);
        }

        return result;
    }

    async login(username: string, passwordInput: string) {
        const user = await this.saleUserModel.findByUsername(username);
        if (!user) {
            throw new Error('User not found or inactive');
        }
        const cleanUser = {
            ...user,
            user_name: user.user_name?.trim() || '',
            password: user.password?.trim() || '',
            emp_id: user.emp_id?.trim() || '',
            name_thai: user.name_thai?.trim() || '',
            name_eng: user.name_eng?.trim() || '',
            departmentcode: user.departmentcode?.trim() || '',
            department: user.department?.trim() || '',
        };

        const encryptedInput = this.encryptLegacy(passwordInput);

        if (cleanUser.password !== encryptedInput) {
            throw new Error('Invalid password');
        }

        const secret = process.env.JWT_SECRET || 'secret_fallback_dev_only';
        const token = jwt.sign(
            {
                username: cleanUser.user_name,
                empId: cleanUser.emp_id,
                fullname: cleanUser.name_thai,
                nameEng: cleanUser.name_eng,
                deptCode: cleanUser.departmentcode,
                dept: cleanUser.department,
            },
            secret,
            { expiresIn: process.env.JWT_EXPIRES_IN || '12h' } as jwt.SignOptions
        );

        const { password: _, ...userInfo } = cleanUser;

        return {
            token,
            user: userInfo
        };
    }
}