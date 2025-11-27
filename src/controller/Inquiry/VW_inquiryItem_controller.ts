import type { Request, Response } from "express";
import { InquiryItemService } from "../../services/Inquiry/VW_inquiryItem_service";

const inquiryItemService = new InquiryItemService();

export const InquiryItemController = {
    async getInquiryItems(req: Request, res: Response): Promise<void> {
        const { inqcode } = req.params;
        try {
            const data = await inquiryItemService.getByINQCode(inqcode || "");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
