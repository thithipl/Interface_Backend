"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proformaPost_controller_1 = require("../../controller/Update_Proforma/proformaPost_controller");
const router = express_1.default.Router();
router.post("/post", proformaPost_controller_1.PostProforma);
exports.default = router;
//# sourceMappingURL=proformaPost_routes.js.map