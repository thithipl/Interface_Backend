"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleUserController = void 0;
const userAuth_Service_1 = require("../../services/User/userAuth_Service");
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