import { Router } from "express";
import { InquiryDtlByPFMNoController } from "../../controller/Inquiry/VW_inquiryDtlByPFMNo";

const router = Router();

router.get("/:pfmcode", InquiryDtlByPFMNoController.getDataDTLInquiry);

export default router;