import type { Request, Response } from "express";
import { QuotationDtlService } from "../../services/Quotation/quotationDtl_service";

const service = new QuotationDtlService();

export const QuotationDtlController = {
    async getByTransactionNo(req: Request, res: Response): Promise<void> {
        const { TransactionNo } = req.params;
        try {
            const quotationDtl = await service.getQuotationDtlByTransactionNo(TransactionNo || "");
            if (quotationDtl) {
                res.status(200).json(quotationDtl);
            } else {
                res.status(404).json({ message: "Quotation detail not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};