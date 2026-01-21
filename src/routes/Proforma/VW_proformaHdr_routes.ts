import { Router } from "express";
import { ProformaHdrController } from "../../controller/Proforma_Data/VW_proformaHdr_controller";

const router = Router();

router.get("/onlyProforma", ProformaHdrController.getOnlyProforma);
router.get("/:pfmcode", ProformaHdrController.getProformaHdrItem);


export default router;