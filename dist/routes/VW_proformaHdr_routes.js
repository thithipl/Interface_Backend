"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_proformaHdr_controller_1 = require("../controller/VW_proformaHdr_controller");
const router = (0, express_1.Router)();
router.get("/:pfmcode", VW_proformaHdr_controller_1.ProformaHdrController.getProformaHdrItem);
exports.default = router;
//# sourceMappingURL=VW_proformaHdr_routes.js.map