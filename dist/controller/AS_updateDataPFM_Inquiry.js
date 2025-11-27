"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryController = void 0;
const AS_updatePFM_Inquiry_1 = require("../services/AS_updatePFM_Inquiry");
const inquiryService = new AS_updatePFM_Inquiry_1.InquiryService();
exports.InquiryController = {
    async updatePFM(req, res) {
        const { pfmNo, inquiryCode, custCode } = req.body;
        try {
            if (!pfmNo || !inquiryCode) {
                res.status(401).json({ message: "Missing required fields" });
                return;
            }
            const result = await inquiryService.updatePFM(pfmNo, inquiryCode, custCode);
            if (result.success) {
                res.status(200).json(result);
            }
            else {
                res.status(400).json(result);
            }
        }
        catch (error) {
            console.error("updatePFM controller error:", error);
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=AS_updateDataPFM_Inquiry.js.map