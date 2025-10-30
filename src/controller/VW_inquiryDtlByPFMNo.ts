import type { Request, Response } from "express";
import { InquiryDtlByPFMNoService } from "../services/VW_InqDtl_ByPFMNo";

const service = new InquiryDtlByPFMNoService();

export const InquiryDtlByPFMNoController = {
    async getDataDTLInquiry(req: Request, res: Response): Promise<void> {
        const { pfmcode } = req.params;
        try {
            const data = await service.getDataDTLInquiry(pfmcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
}