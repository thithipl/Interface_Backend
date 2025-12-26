import { Router } from "express";
import { GetInvoiceJsonController } from "../../controller/Invoice_Get/invoiceOnly_controller";

const router = Router();

router.get("/", GetInvoiceJsonController.getInvoiceJson);
router.get("/:invoiceCode", GetInvoiceJsonController.getInvoiceJson);

export default router;