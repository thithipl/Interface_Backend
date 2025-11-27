"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invoicePostData_controller_1 = require("../../controller/Invoice_Update/invoicePostData_controller");
const router = express_1.default.Router();
router.post("/post", invoicePostData_controller_1.InvoiceDataPostController.PostInvoiceDataService);
exports.default = router;
//# sourceMappingURL=invoicePostData_routes.js.map