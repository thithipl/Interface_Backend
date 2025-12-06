import { Router } from "express";
import { GetInvoiceJsonController } from "../../controller/Invoice_Get/invoiceJson_controller";

const router = Router();

router.get("/", GetInvoiceJsonController.getInvoiceJson);
router.get("/:invoiceCode", GetInvoiceJsonController.getInvoiceJson);

export default router;