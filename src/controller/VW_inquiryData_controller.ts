import type { Request, Response } from "express";
import { InquiryDataService, InquiryAllService } from "../services/VW_inquiryData_service";

const service = new InquiryDataService();
const allService = new InquiryAllService();

export const InquiryDataController = {
    async getInquiryData(req: Request, res: Response): Promise<void> {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },

    async getInquiryDataByINQCode(req: Request, res: Response): Promise<void> {
        const { inqcode } = req.params;
        try {
            const data = await service.getByINQCode(inqcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },

    async getInquiryAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await allService.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },

    async getInquiryAllByINQCode(req: Request, res: Response): Promise<void> {
        const { inqcode } = req.params;
        try {
            const data = await allService.getByINQCode(inqcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
}