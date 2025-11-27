"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryAddController = void 0;
const VW_inquiryAdd_service_1 = require("../../services/Inquiry/VW_inquiryAdd_service");
const inquiryAddservice = new VW_inquiryAdd_service_1.InquiryAddService();
exports.InquiryAddController = {
    async getInqAdd(req, res) {
        const { inqcode } = req.params;
        try {
            const data = await inquiryAddservice.getINQAdd(inqcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_inquiryAdd_controller.js.map