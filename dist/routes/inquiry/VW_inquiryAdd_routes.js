"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryAdd_controller_1 = require("../../controller/Inquiry/VW_inquiryAdd_controller");
const router = (0, express_1.Router)();
router.get("/:inqcode", VW_inquiryAdd_controller_1.InquiryAddController.getInqAdd);
exports.default = router;
//# sourceMappingURL=VW_inquiryAdd_routes.js.map