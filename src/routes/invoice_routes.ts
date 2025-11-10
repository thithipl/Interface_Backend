import express from "express";
import { updateInvoice } from "../controller/invoice_controller";

const router = express.Router();

router.post("/update", updateInvoice);

export default router;