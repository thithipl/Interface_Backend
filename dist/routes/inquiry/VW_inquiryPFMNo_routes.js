"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryPFMNo_controller_1 = require("../../controller/Inquiry/VW_inquiryPFMNo_controller");
const router = (0, express_1.Router)();
router.get("/load", VW_inquiryPFMNo_controller_1.InquiryPFMNoController.getLoadInquiryPFMNo);
exports.default = router;
//# sourceMappingURL=VW_inquiryPFMNo_routes.js.map