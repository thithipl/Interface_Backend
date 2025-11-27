import { Router } from "express";
import { OnlyIqrController } from "../../controller/Inquiry/VW_onlyiqr_controller";

const router = Router();

router.get("/", OnlyIqrController.getAll);

export default router;