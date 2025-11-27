import { Router } from "express";
import { QuotationController } from "../../controller/Quotation/quotation_controller";

const router = Router();

router.get("/", QuotationController.getTop1000);
router.get("/:orderNo", QuotationController.getByOrderNo);

export default router;