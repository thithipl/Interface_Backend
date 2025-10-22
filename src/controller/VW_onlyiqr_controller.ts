import type { Request, Response } from "express";
import { OnlyIqrService } from "../services/VW_onlyiqr_service";

const service = new OnlyIqrService();

export const OnlyIqrController = {

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
}