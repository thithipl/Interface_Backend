import { Router } from "express";
import { InquiryItemController } from "../../controller/Inquiry/VW_inquiryItem_controller";

const router = Router();

router.get("/:inqcode", InquiryItemController.getInquiryItems);

export default router;
