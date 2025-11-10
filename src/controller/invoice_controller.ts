import { Request, Response } from "express";
import { invoiceService } from "../services/invoice_service";
import { InvoiceParam } from "../models/m_invoice";

export const updateInvoice = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }

        const data: InvoiceParam = req.body;
        const result = await invoiceService.updateInvoice(data, token);

        res.json(result);
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
