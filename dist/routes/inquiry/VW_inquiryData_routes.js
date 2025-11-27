"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryData_controller_1 = require("../../controller/Inquiry/VW_inquiryData_controller");
const router = (0, express_1.Router)();
router.get("/data", VW_inquiryData_controller_1.InquiryDataController.getInquiryData);
router.get("/all", VW_inquiryData_controller_1.InquiryDataController.getInquiryAll);
router.get("/all/:inqcode", VW_inquiryData_controller_1.InquiryDataController.getInquiryAllByINQCode);
router.get("/data/:inqcode", VW_inquiryData_controller_1.InquiryDataController.getInquiryDataByINQCode);
exports.default = router;
//# sourceMappingURL=VW_inquiryData_routes.js.map