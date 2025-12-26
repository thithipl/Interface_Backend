import type { Request, Response } from "express";
import { InvoiceJsonService } from "../../services/Invoice/invoiceJson_service";
import { createParsedInvoice } from '../../models/m_invoice/invoice_parser';

const service = new InvoiceJsonService();

class InvoiceController {

    getInvoiceConvert = async (req: Request, res: Response): Promise<void> => {
        try {
            const { invoiceCode } = req.params;
            if (!invoiceCode) {
                res.status(400).json({ message: "Invoice Code is required." });
                return;
            }

            const [rawDbData, rawItemData] = await Promise.all([
                service.getInvoiceJson(invoiceCode),
                service.getInvoiceItems(invoiceCode),
            ]);

            if (!rawDbData) {
                res.status(404).json({ message: "Invoice data not found." });
                return;
            }

            try {
                const invoiceArray = [rawDbData];
                const finalResult = createParsedInvoice(invoiceArray, rawItemData);
                const responseData = finalResult.detail;
                res.json(responseData);

            } catch (parseError) {
                console.error(`JSON Parse Error for Invoice: ${invoiceCode}`, parseError);
                res.status(500).json({
                    message: "Failed to parse JSON content from database.",
                    error: parseError instanceof Error ? parseError.message : String(parseError)
                });
            }

        } catch (error) {
            console.error("Error fetching invoice data:", error);
            res.status(500).json({
                message: "Internal server error.",
                error: error instanceof Error ? error.message : "An unknown error occurred"
            });
        }
    }
}

export const GetInvoiceController = new InvoiceController();