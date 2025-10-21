"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryItemController = void 0;
const VW_inquiryItem_service_1 = require("../services/VW_inquiryItem_service");
const inquiryItemService = new VW_inquiryItem_service_1.InquiryItemService();
exports.InquiryItemController = {
    async getInquiryItems(req, res) {
        const { inqcode } = req.params;
        try {
            const data = await inquiryItemService.getByINQCode(inqcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_inquiryItem_controller.js.map