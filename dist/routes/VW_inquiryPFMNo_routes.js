"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryPFMNo_controller_1 = require("../controller/VW_inquiryPFMNo_controller");
const router = (0, express_1.Router)();
router.get("/", VW_inquiryPFMNo_controller_1.InquiryPFMNoController.getAll);
router.get("/:pfmNo", VW_inquiryPFMNo_controller_1.InquiryPFMNoController.getByPFMNo);
exports.default = router;
//# sourceMappingURL=VW_inquiryPFMNo_routes.js.map