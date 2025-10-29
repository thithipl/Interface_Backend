import type { Request, Response } from "express";
import { InquiryReqService } from "../services/VW_inquiryReq_service";

const inquiryReqService = new InquiryReqService();

export const InquiryReqController = {
    async getINQReqByINQCode(req: Request, res: Response): Promise<void> {
        const { inqcode } = req.params;
        try {
            const data = await inquiryReqService.getINQReqByINQCode(inqcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};  