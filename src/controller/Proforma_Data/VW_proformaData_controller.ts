import type { Request, Response } from "express";
import { ProformaDataService } from "../../services/Proforma/VW_profromaData_service";

const service = new ProformaDataService();

export const ProformaDataController = {
    async getAll (req: Request, res: Response): Promise<void> {
        try {
            const data = await service.getAllProformaData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
},

    async getByPFMNo (req: Request, res: Response): Promise<void> {
        try {
            const { pfmNo } = req.params;
            const data = await service.getProformaDataByPFMNo(pfmNo || "");
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: "Proforma data not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
