import { Router } from "express";
import { QuotationDtlController } from "../controller/quotationDtl_controller";

const router = Router();

router.get("/:TransactionNo", QuotationDtlController.getByTransactionNo);

export default router;