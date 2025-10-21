import { Router } from "express";
import { OnlyIqrController } from "../controller/VW_onlyiqr_controller";

const router = Router();

router.get("/", OnlyIqrController.getAll);

export default router;