import { Router } from "express";
import { InquiryPFMNoController } from "../controller/inquiryPFMNo_Controller";

const router = Router();

router.get("/all", InquiryPFMNoController.getAll);
router.get("/:pfmNo", InquiryPFMNoController.getByPFMNo);

export default router;