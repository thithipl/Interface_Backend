import { Router } from "express";
import { InquiryDtlByPFMNoController } from "../controller/VW_inquiryDtlByPFMNo";

const router = Router();

router.get("/:pfmcode", InquiryDtlByPFMNoController.getDataDTLInquiry);

export default router;