"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationDtlController = void 0;
const quotationDtl_service_1 = require("../../services/Quotation/quotationDtl_service");
const service = new quotationDtl_service_1.QuotationDtlService();
exports.QuotationDtlController = {
    async getByTransactionNo(req, res) {
        const { TransactionNo } = req.params;
        try {
            const quotationDtl = await service.getQuotationDtlByTransactionNo(TransactionNo || "");
            if (quotationDtl) {
                res.status(200).json(quotationDtl);
            }
            else {
                res.status(404).json({ message: "Quotation detail not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=quotationDtl_controller.js.map