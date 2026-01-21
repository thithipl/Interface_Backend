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
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Request Body is empty!"
            });
        }
        const hasProformaCode = req.body.proforma_code || req.body.proforma_Code;
        if (!hasProformaCode) {
            console.warn("Warning: Body is missing 'proforma_code' or 'proforma_Code'");
        }
        const data = req.body;
        const result = await proformaPost_service_1.proformaPostService.postProforma(data, token);
        res.json(result);
    }
    catch (error) {
        console.error("Controller Error:", error);
        let statusCode = 500;
        if (error.message.includes("422"))
            statusCode = 422;
        if (error.message.includes("400"))
            statusCode = 400;
        if (error.message.includes("404"))
            statusCode = 404;
        res.status(statusCode).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};
exports.PostProforma = PostProforma;
//# sourceMappingURL=proformaPost_controller.js.map