"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AS_updateDataPFM_Inquiry_1 = require("../controller/AS_updateDataPFM_Inquiry");
const router = (0, express_1.Router)();
router.post("/", AS_updateDataPFM_Inquiry_1.InquiryController.updatePFM);
exports.default = router;
//# sourceMappingURL=AS_updateDataPFM_Inquiry.js.map