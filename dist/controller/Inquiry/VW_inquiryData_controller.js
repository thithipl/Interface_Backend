"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryDataController = void 0;
const VW_inquiryData_service_1 = require("../../services/Inquiry/VW_inquiryData_service");
const service = new VW_inquiryData_service_1.InquiryDataService();
const allService = new VW_inquiryData_service_1.InquiryAllService();
exports.InquiryDataController = {
    async getInquiryData(req, res) {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getInquiryDataByINQCode(req, res) {
        const { inqcode } = req.params;
        try {
            const data = await service.getByINQCode(inqcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getInquiryAll(req, res) {
        try {
            const data = await allService.getAll();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getInquiryAllByINQCode(req, res) {
        const { inqcode } = req.params;
        try {
            const data = await allService.getByINQCode(inqcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_inquiryData_controller.js.map