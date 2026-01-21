import { Request, Response } from "express";
import { invoiceDataPostService } from "../../services/Invoice/invoicePost_service";
import { InvoiceModelPost } from "../../models/m_invoice/m_invoicePost";

export const updateInvoice = async (req: Request, res: Response) => {
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

        const data: InvoiceModelPost = req.body;

        const result = await invoiceDataPostService.PostInvoice(data, token);

        res.json(result);

    } catch (error: any) {
        console.error("❌ Invoice Controller Error:", error.message);

        let statusCode = 500;
        if (error.message.includes("400")) statusCode = 400;
        if (error.message.includes("401")) statusCode = 401;
        if (error.message.includes("422")) statusCode = 422;
        if (error.message.includes("404")) statusCode = 404;

        res.status(statusCode).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};
