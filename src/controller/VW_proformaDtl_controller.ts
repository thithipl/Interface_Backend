import type { Request, Response } from "express";
import { ProformaDtlService } from "../services/VW_proformaDtl_service";

const service = new ProformaDtlService();

export const ProformaDtlController = {
    async getProformaDtlItem(req: Request, res: Response): Promise<void> {
        const { pfmcode } = req.params;
        try {
            const data = await service.getProformaDtlByPFMCode(pfmcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};