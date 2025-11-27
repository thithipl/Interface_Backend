"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDataPostController = void 0;
const invoiceDataPost_service_1 = require("../../services/Invoice/invoiceDataPost_service");
const service = new invoiceDataPost_service_1.InvoiceDataPostService();
exports.InvoiceDataPostController = {
    PostInvoiceDataService: async (req, res) => {
        try {
            const data = await service.PostInvoiceDataService(req.body);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=invoicePostData_controller.js.map