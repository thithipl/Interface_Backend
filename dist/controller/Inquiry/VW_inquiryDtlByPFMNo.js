"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryDtlByPFMNoController = void 0;
const VW_InqDtl_ByPFMNo_1 = require("../../services/Inquiry/VW_InqDtl_ByPFMNo");
const service = new VW_InqDtl_ByPFMNo_1.InquiryDtlByPFMNoService();
exports.InquiryDtlByPFMNoController = {
    async getDataDTLInquiry(req, res) {
        const { pfmcode } = req.params;
        try {
            const data = await service.getDataDTLInquiry(pfmcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=VW_inquiryDtlByPFMNo.js.map