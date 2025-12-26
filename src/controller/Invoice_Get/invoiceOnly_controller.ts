import type { Request, Response } from "express";
import { InvoiceOnlyCodeService } from "../../services/Invoice/invoiceCode_service";

const service = new InvoiceOnlyCodeService();

export const GetInvoiceJsonController = {
    getInvoiceJson: async (req: Request, res: Response): Promise<void> => {
        try {
            const invoiceCode = req.params.invoiceCode;
            const result = await service.getInvoice_Only(invoiceCode);
            res.json(result);
        } catch (error) {
            console.error("Error fetching invoice data:", error);
            res.status(500).json({
                message: "Internal server error while retrieving invoice Json",
                error: error instanceof Error ? error.message : "An unknown error occurred"
            });
        }
    }
};