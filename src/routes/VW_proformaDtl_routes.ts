import { Router } from "express";
import { ProformaDtlController } from "../controller/VW_proformaDtl_controller";

const router = Router();

router.get("/:pfmcode", ProformaDtlController.getProformaDtlItem);

export default router;
