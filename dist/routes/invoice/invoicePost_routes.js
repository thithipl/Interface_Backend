"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoicePost_controller_1 = require("../../controller/Invoice_Update/invoicePost_controller");
const router = express_1.default.Router();
router.post("/update", invoicePost_controller_1.updateInvoice);
exports.default = router;
//# sourceMappingURL=invoicePost_routes.js.map