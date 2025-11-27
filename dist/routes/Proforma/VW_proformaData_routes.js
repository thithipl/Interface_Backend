"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_proformaData_controller_1 = require("../../controller/Proforma_Data/VW_proformaData_controller");
const router = (0, express_1.Router)();
router.get("/", VW_proformaData_controller_1.ProformaDataController.getAll);
router.get("/:pfmNo", VW_proformaData_controller_1.ProformaDataController.getByPFMNo);
exports.default = router;
//# sourceMappingURL=VW_proformaData_routes.js.map