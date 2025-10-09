import { Router } from "express";
import { InquiryPFMNoController } from "../controller/VW_inquiryPFMNo_controller";

const router = Router();

router.get("/", InquiryPFMNoController.getAll);
router.get("/:pfmNo", InquiryPFMNoController.getByPFMNo);

export default router;