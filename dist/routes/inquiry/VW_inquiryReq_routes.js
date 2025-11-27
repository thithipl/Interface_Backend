"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryReq_controller_1 = require("../../controller/Inquiry/VW_inquiryReq_controller");
const router = (0, express_1.Router)();
router.get("/:inqcode", VW_inquiryReq_controller_1.InquiryReqController.getINQReqByINQCode);
exports.default = router;
//# sourceMappingURL=VW_inquiryReq_routes.js.map