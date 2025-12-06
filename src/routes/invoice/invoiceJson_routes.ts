import { Router } from "express";
import { GetInvoiceController } from "../../controller/Invoice_Get/GetInvoice_controller";

const router = Router();

router.get("/:invoiceCode", GetInvoiceController.getInvoiceConvert);

export default router;