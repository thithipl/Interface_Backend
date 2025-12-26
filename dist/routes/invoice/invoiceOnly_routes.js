"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceOnly_controller_1 = require("../../controller/Invoice_Get/invoiceOnly_controller");
const router = (0, express_1.Router)();
router.get("/", invoiceOnly_controller_1.GetInvoiceJsonController.getInvoiceJson);
router.get("/:invoiceCode", invoiceOnly_controller_1.GetInvoiceJsonController.getInvoiceJson);
exports.default = router;
//# sourceMappingURL=invoiceOnly_routes.js.map