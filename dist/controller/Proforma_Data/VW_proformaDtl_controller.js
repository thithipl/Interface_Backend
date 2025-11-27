"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDtlController = void 0;
const VW_proformaDtl_service_1 = require("../../services/Proforma/VW_proformaDtl_service");
const service = new VW_proformaDtl_service_1.ProformaDtlService();
exports.ProformaDtlController = {
    async getProformaDtlItem(req, res) {
        const { pfmcode } = req.params;
        try {
            const data = await service.getProformaDtlByPFMCode(pfmcode || "");
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_proformaDtl_controller.js.map