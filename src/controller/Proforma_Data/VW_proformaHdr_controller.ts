import type { Request, Response } from "express";
import { ProformaHdrService } from "../../services/Proforma/VW_proformaHdr_service";

const service = new ProformaHdrService();

export const ProformaHdrController = {
    async getProformaHdrItem(req: Request, res: Response): Promise<void> {
        const { pfmcode } = req.params;
        try {
            const data = await service.getProformaHdrByPFMCode(pfmcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getOnlyProforma(req: Request, res: Response): Promise<void> {
        try {
            const data = await service.getOnlyProforma();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
}