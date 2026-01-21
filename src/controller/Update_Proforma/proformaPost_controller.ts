import { Request, Response } from "express";
import { proformaPostService } from "../../services/Proforma/proformaPost_service";
import { ProformaModelPost } from "../../models/m_proforma/m_proformaPost";

export const PostProforma = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Request Body is empty!"
            });
        }

        const hasProformaCode = req.body.proforma_code || req.body.proforma_Code;

        if (!hasProformaCode) {
            console.warn("Warning: Body is missing 'proforma_code' or 'proforma_Code'");
        }

        const data: ProformaModelPost = req.body;

        const result = await proformaPostService.postProforma(data, token);

        res.json(result);

    } catch (error: any) {
        console.error("Controller Error:", error);

        let statusCode = 500;
        if (error.message.includes("422")) statusCode = 422;
        if (error.message.includes("400")) statusCode = 400;
        if (error.message.includes("404")) statusCode = 404;

        res.status(statusCode).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}