import { Router } from "express";
import { InquiryController } from "../controller/AS_updateDataPFM_Inquiry";

const router = Router();

router.post("/", InquiryController.updatePFM);

export default router;