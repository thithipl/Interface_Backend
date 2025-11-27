import { Router } from "express";
import { ProformaDtlController } from "../../controller/Proforma_Data/VW_proformaDtl_controller";

const router = Router();

router.get("/:pfmcode", ProformaDtlController.getProformaDtlItem);

export default router;
