import type { Request, Response } from "express";
import { InquiryService } from "../../services/Proforma/AS_updatePFM_Inquiry";

const inquiryService = new InquiryService();

export const InquiryController = {
    async updatePFM(req: Request, res: Response): Promise<void> {
        const { pfmNo, inquiryCode, custCode } = req.body;
        try {
            if (!pfmNo || !inquiryCode) {
                res.status(401).json({ message: "Missing required fields" });
                return;
            }
            
            const result = await inquiryService.updatePFM(pfmNo, inquiryCode, custCode);
            
            if (result.success) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        } catch (error) {
            console.error("updatePFM controller error:", error);
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
