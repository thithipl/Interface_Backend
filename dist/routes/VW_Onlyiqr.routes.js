"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VW_onlyiqr_controller_1 = require("../controller/VW_onlyiqr_controller");
const router = (0, express_1.Router)();
router.get("/", VW_onlyiqr_controller_1.OnlyIqrController.getAll);
exports.default = router;
//# sourceMappingURL=VW_onlyiqr.routes.js.map