"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvoiceJsonController = void 0;
const invoiceCode_service_1 = require("../../services/Invoice/invoiceCode_service");
const service = new invoiceCode_service_1.InvoiceOnlyCodeService();
exports.GetInvoiceJsonController = {
    getInvoiceJson: async (req, res) => {
        try {
            const invoiceCode = req.params.invoiceCode;
            const result = await service.getInvoice_Only(invoiceCode);
            res.json(result);
        }
        catch (error) {
            console.error("Error fetching invoice data:", error);
            res.status(500).json({
                message: "Internal server error while retrieving invoice Json",
                error: error instanceof Error ? error.message : "An unknown error occurred"
            });
        }
    }
};
//# sourceMappingURL=invoiceOnly_controller.js.map