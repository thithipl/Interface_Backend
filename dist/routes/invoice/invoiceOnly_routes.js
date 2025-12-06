"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceJson_controller_1 = require("../../controller/Invoice_Get/invoiceJson_controller");
const router = (0, express_1.Router)();
router.get("/", invoiceJson_controller_1.GetInvoiceJsonController.getInvoiceJson);
router.get("/:invoiceCode", invoiceJson_controller_1.GetInvoiceJsonController.getInvoiceJson);
exports.default = router;
//# sourceMappingURL=invoiceOnly_routes.js.map