import { Router } from "express";
import { InquiryReqController } from "../controller/VW_inquiryReq_controller";

const router = Router();

router.get("/:inqcode", InquiryReqController.getINQReqByINQCode);

export default router;