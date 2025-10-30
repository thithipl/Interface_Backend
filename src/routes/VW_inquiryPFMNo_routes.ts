import { Router } from "express";
import { InquiryPFMNoController } from "../controller/VW_inquiryPFMNo_controller";

const router = Router();

router.get("/load", InquiryPFMNoController.getLoadInquiryPFMNo);

export default router;