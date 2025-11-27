"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quotation_controller_1 = require("../../controller/Quotation/quotation_controller");
const router = (0, express_1.Router)();
router.get("/", quotation_controller_1.QuotationController.getTop1000);
router.get("/:orderNo", quotation_controller_1.QuotationController.getByOrderNo);
exports.default = router;
//# sourceMappingURL=quotation.routes.js.map