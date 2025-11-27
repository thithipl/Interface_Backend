"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryPFMNoController = void 0;
const VW_inquiryPFMNo_service_1 = require("../../services/Inquiry/VW_inquiryPFMNo_service");
const service = new VW_inquiryPFMNo_service_1.InquiryCodePFMNoService();
exports.InquiryPFMNoController = {
    async getLoadInquiryPFMNo(req, res) {
        try {
            const data = await service.LoadInquiryPFMNo();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=VW_inquiryPFMNo_controller.js.map