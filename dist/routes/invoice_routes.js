"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoice_controller_1 = require("../controller/invoice_controller");
const router = express_1.default.Router();
router.post("/update", invoice_controller_1.updateInvoice);
exports.default = router;
//# sourceMappingURL=invoice_routes.js.map