"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const saleUser_controller_1 = require("../../controller/\u0E4ASaleUser/saleUser_controller");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/login', saleUser_controller_1.saleUserController.login);
router.get('/my-profile', authMiddleware_1.authenticateToken, saleUser_controller_1.saleUserController.getUserProfile);
exports.default = router;
//# sourceMappingURL=saleLogin_routes.js.map