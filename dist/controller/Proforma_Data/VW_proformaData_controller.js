"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDataController = void 0;
const VW_profromaData_service_1 = require("../../services/Proforma/VW_profromaData_service");
const service = new VW_profromaData_service_1.ProformaDataService();
exports.ProformaDataController = {
    async getAll(req, res) {
        try {
            const data = await service.getAllProformaData();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
    async getByPFMNo(req, res) {
        try {
            const { pfmNo } = req.params;
            const data = await service.getProformaDataByPFMNo(pfmNo || "");
            if (data) {
                res.status(200).json(data);
            }
            else {
                res.status(404).json({ message: "Proforma data not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    }
};
//# sourceMappingURL=VW_proformaData_controller.js.map