"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_inquiryItem_controller_1 = require("../controller/VW_inquiryItem_controller");
const router = (0, express_1.Router)();
router.get("/:inqcode", VW_inquiryItem_controller_1.InquiryItemController.getInquiryItems);
exports.default = router;
//# sourceMappingURL=VW_inquiryItem_routes.js.map