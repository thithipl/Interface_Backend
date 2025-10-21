"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryPFMNoController = void 0;
const VW_inquiryPFMNo_service_1 = require("../services/VW_inquiryPFMNo_service");
const service = new VW_inquiryPFMNo_service_1.InquiryCodePFMNoService();
exports.InquiryPFMNoController = {
    async getAll(req, res) {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getByPFMNo(req, res) {
        const { pfmNo } = req.params;
        try {
            const data = await service.getByPFMNo(pfmNo || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_inquiryPFMNo_controller.js.map