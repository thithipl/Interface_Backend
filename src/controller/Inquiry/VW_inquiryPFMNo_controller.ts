import type { Request, Response } from "express";
import { InquiryCodePFMNoService } from "../../services/Inquiry/VW_inquiryPFMNo_service";

const service = new InquiryCodePFMNoService();

export const InquiryPFMNoController = {
    async getLoadInquiryPFMNo(req: Request, res: Response): Promise<void> {
        try {
            const data = await service.LoadInquiryPFMNo();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
