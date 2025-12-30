import express from "express";
import { updateInvoice } from "../../controller/Invoice_Update/invoicePost_controller";

const router = express.Router();

router.post("/update", updateInvoice);

export default router;