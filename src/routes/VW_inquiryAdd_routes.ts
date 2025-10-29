import { Router } from "express";
import { InquiryAddController } from "../controller/VW_inquiryAdd_controller";

const router = Router();

router.get("/:inqcode", InquiryAddController.getInqAdd);

export default router;