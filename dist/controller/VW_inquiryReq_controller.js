"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryReqController = void 0;
const VW_inquiryReq_service_1 = require("../services/VW_inquiryReq_service");
const inquiryReqService = new VW_inquiryReq_service_1.InquiryReqService();
exports.InquiryReqController = {
    async getINQReqByINQCode(req, res) {
        const { inqcode } = req.params;
        try {
            const data = await inquiryReqService.getINQReqByINQCode(inqcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=VW_inquiryReq_controller.js.map