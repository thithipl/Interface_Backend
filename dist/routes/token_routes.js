"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_controller_1 = require("../controller/token_controller");
const router = (0, express_1.Router)();
const controller = new token_controller_1.TokenController();
router.post('/getToken', (req, res) => controller.login(req, res));
exports.default = router;
//# sourceMappingURL=token_routes.js.map