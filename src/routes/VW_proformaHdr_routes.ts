import { Router } from "express";
import { ProformaHdrController } from "../controller/VW_proformaHdr_controller";

const router = Router();

router.get("/:pfmcode", ProformaHdrController.getProformaHdrItem);

export default router;