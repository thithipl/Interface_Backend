import { Router } from "express";
import { ProformaDataController } from "../controller/VW_proformaData_controller";

const router = Router();

router.get("/", ProformaDataController.getAll);
router.get("/:pfmNo", ProformaDataController.getByPFMNo);

export default router;