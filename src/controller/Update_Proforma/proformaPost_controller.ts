import { Request, Response } from "express";
import { proformaPostService } from "../../services/Proforma/proformaPost_service";
import { ProformaModelPost } from "../../models/m_proforma/m_proformaPost";

export const PostProforma = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }
        const data: ProformaModelPost = req.body;
        const result = await proformaPostService.postProforma(data, token);
        res.json(result);
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}