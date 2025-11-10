"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInvoice = void 0;
const invoice_service_1 = require("../services/invoice_service");
const updateInvoice = async (req, res) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }
        const data = req.body;
        const result = await invoice_service_1.invoiceService.updateInvoice(data, token);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateInvoice = updateInvoice;
//# sourceMappingURL=invoice_controller.js.map