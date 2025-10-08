import type { Request, Response } from "express";
import { QuotationService } from "../services/quotation_service";

const service = new QuotationService();

export const QuotationController = {
    async getTop1000(req: Request, res: Response): Promise<void> {
        try {
            const quotations = await service.getTop1000Quotations();
            res.status(200).json(quotations);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },

    async getByOrderNo(req: Request, res: Response): Promise<void> {
        const { orderNo } = req.params;
        try {
            const quotation = await service.getQuotationByOrderNo(orderNo || "");
            if (quotation) {
                res.status(200).json(quotation);
            } else {
                res.status(404).json({ message: "Quotation not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};