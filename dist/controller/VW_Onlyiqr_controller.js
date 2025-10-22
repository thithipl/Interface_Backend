"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyIqrController = void 0;
const VW_onlyiqr_service_1 = require("../services/VW_onlyiqr_service");
const service = new VW_onlyiqr_service_1.OnlyIqrService();
exports.OnlyIqrController = {
    async getAll(req, res) {
        try {
            const data = await service.getAll();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error", error });
        }
    },
};
//# sourceMappingURL=VW_onlyiqr_controller.js.map