"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaHdrController = void 0;
const VW_proformaHdr_service_1 = require("../services/VW_proformaHdr_service");
const service = new VW_proformaHdr_service_1.ProformaHdrService();
exports.ProformaHdrController = {
    async getProformaHdrItem(req, res) {
        const { pfmcode } = req.params;
        try {
            const data = await service.getProformaHdrByPFMCode(pfmcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_proformaHdr_controller.js.map