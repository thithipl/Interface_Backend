import { Router } from "express";
import { QuotationController } from "../controller/quotation_controller";

const router = Router();

router.get("/", QuotationController.getTop1000);
router.get("/:orderNo", QuotationController.getByOrderNo);

export default router;