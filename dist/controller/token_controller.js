"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const getToken_service_1 = require("../services/getToken_service");
const getTokenService = new getToken_service_1.GetTokenService();
class TokenController {
    async login(req, res) {
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
        }
        catch (error) {
            console.error('Login error:', error.message);
            res.status(500).json({
                success: false,
                message: error.response?.data?.message || error.message || 'Login failed',
            });
        }
    }
}
exports.TokenController = TokenController;
//# sourceMappingURL=token_controller.js.map