import { Router } from "express";
import { InquiryDataController } from "../../controller/Inquiry/VW_inquiryData_controller";

const router = Router();

router.get("/data", InquiryDataController.getInquiryData);
router.get("/all", InquiryDataController.getInquiryAll);
router.get("/all/:inqcode", InquiryDataController.getInquiryAllByINQCode);
router.get("/data/:inqcode", InquiryDataController.getInquiryDataByINQCode);

export default router;
