import type { Request, Response } from "express";
import { InquiryCodePFMNoService } from "../services/VW_inquiryPFMNo_service";

const service = new InquiryCodePFMNoService();

export const InquiryPFMNoController = {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },

    async getByPFMNo(req: Request, res: Response): Promise<void> {
        const { pfmNo } = req.params;
        try {
            const data = await service.getByPFMNo(pfmNo || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
