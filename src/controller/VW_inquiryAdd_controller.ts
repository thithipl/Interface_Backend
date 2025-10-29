import type { Request, Response } from "express";
import { InquiryAddService } from "../services/VW_inquiryAdd_service";

const inquiryAddservice = new InquiryAddService();

export const InquiryAddController = {
    async getInqAdd(req: Request, res: Response): Promise<void> {
        const { inqcode } = req.params;
        try {
            const data = await inquiryAddservice.getINQAdd(inqcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
}