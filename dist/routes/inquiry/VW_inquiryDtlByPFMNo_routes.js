"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryDtlByPFMNo_1 = require("../../controller/Inquiry/VW_inquiryDtlByPFMNo");
const router = (0, express_1.Router)();
router.get("/:pfmcode", VW_inquiryDtlByPFMNo_1.InquiryDtlByPFMNoController.getDataDTLInquiry);
exports.default = router;
//# sourceMappingURL=VW_inquiryDtlByPFMNo_routes.js.map