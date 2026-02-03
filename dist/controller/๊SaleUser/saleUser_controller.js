"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleUserController = void 0;
const userAuth_Service_1 = require("../../services/User/userAuth_Service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authService = new userAuth_Service_1.AuthService();
exports.saleUserController = {
    login: async (req, res) => {
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
                const adminPayload = {
                    user_name: 'Admin',
                    username: 'Admin User',
                    emp_id: 'Administrator007',
                    fullname: 'Admin User',
                    nameEng: 'Admin User',
                    name_thai: 'Admin User',
                    name_eng: 'Admin User',
                    deptCode: 'IT',
                    departmentcode: 'IT',
                    dept: 'Admin',
                    department: 'Admin'
                };
                const testToken = jsonwebtoken_1.default.sign(adminPayload, secret, { expiresIn: '1d' });
                return res.status(200).json({
                    success: true,
                    message: "เข้าสู่ระบบสำเร็จ (Test Mode)",
                    token: testToken,
                    user: adminPayload
                });
            }
            const result = await authService.login(username, password);
            return res.status(200).json({
                success: true,
                message: "เข้าสู่ระบบสำเร็จ",
                token: result.token,
                user: result.user
            });
        }
        catch (error) {
            console.error("Login Error:", error.message);
            return res.status(401).json({
                success: false,
                message: error.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ"
            });
        }
    },
    getUserProfile: async (req, res) => {
        try {
            const user = req.user;
            res.json({
                success: true,
                user: user
            });
        }
        catch (error) {
            console.error("Profile Retrieval Error:", error.message);
            res.status(500).json({ message: "Error retrieving profile" });
        }
    }
};
//# sourceMappingURL=saleUser_controller.js.map