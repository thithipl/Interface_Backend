"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetInvoice_controller_1 = require("../../controller/Invoice_Get/GetInvoice_controller");
const router = (0, express_1.Router)();
router.get("/:invoiceCode", GetInvoice_controller_1.GetInvoiceController.getInvoiceConvert);
exports.default = router;
//# sourceMappingURL=invoiceJson_routes.js.map