"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_proformaDtl_controller_1 = require("../controller/VW_proformaDtl_controller");
const router = (0, express_1.Router)();
router.get("/:pfmcode", VW_proformaDtl_controller_1.ProformaDtlController.getProformaDtlItem);
exports.default = router;
//# sourceMappingURL=VW_proformaDtl_routes.js.map