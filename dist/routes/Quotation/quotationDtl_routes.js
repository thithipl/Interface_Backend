"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quotationDtl_controller_1 = require("../../controller/Quotation/quotationDtl_controller");
const router = (0, express_1.Router)();
router.get("/:TransactionNo", quotationDtl_controller_1.QuotationDtlController.getByTransactionNo);
exports.default = router;
//# sourceMappingURL=quotationDtl_routes.js.map