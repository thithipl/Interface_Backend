import { Router } from "express";
import { QuotationController } from "../controller/quotation_controller";

const router = Router();

router.get("/top1000", QuotationController.getTop1000);
router.get("/:orderNo", QuotationController.getByOrderNo);

export default router;