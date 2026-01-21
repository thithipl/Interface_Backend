"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInvoice = void 0;
const invoicePost_service_1 = require("../../services/Invoice/invoicePost_service");
const updateInvoice = async (req, res) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Request Body is empty!"
            });
        }
        const data = req.body;
        const result = await invoicePost_service_1.invoiceDataPostService.PostInvoice(data, token);
        res.json(result);
    }
    catch (error) {
        console.error("❌ Invoice Controller Error:", error.message);
        let statusCode = 500;
        if (error.message.includes("400"))
            statusCode = 400;
        if (error.message.includes("401"))
            statusCode = 401;
        if (error.message.includes("422"))
            statusCode = 422;
        if (error.message.includes("404"))
            statusCode = 404;
        res.status(statusCode).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};
exports.updateInvoice = updateInvoice;
//# sourceMappingURL=invoicePost_controller.js.map