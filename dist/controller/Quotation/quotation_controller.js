"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationController = void 0;
const quotation_service_1 = require("../../services/Quotation/quotation_service");
const service = new quotation_service_1.QuotationService();
exports.QuotationController = {
    async getTop1000(req, res) {
        try {
            const quotations = await service.getTop1000Quotations();
            res.status(200).json(quotations);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getByOrderNo(req, res) {
        const { orderNo } = req.params;
        try {
            const quotation = await service.getQuotationByOrderNo(orderNo || "");
            if (quotation) {
                res.status(200).json(quotation);
            }
            else {
                res.status(404).json({ message: "Quotation not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=quotation_controller.js.map