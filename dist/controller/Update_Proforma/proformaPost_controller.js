"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostProforma = void 0;
const proformaPost_service_1 = require("../../services/Proforma/proformaPost_service");
const PostProforma = async (req, res) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }
        const data = req.body;
        const result = await proformaPost_service_1.proformaPostService.postProforma(data, token);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.PostProforma = PostProforma;
//# sourceMappingURL=proformaPost_controller.js.map