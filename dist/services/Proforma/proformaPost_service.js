"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proformaPostService = exports.ProformaPostService = void 0;
const axios_1 = __importDefault(require("axios"));
class ProformaPostService {
    constructor() {
        this.apiUrl = "https://www.fortuneparts.net/api/proforma/update";
    }
    async postProforma(data, token) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const response = await axios_1.default.post(this.apiUrl, data, { headers });
            return response.data;
        }
        catch (error) {
            console.error("ProformaPostService.postProforma error:", error.message);
            throw new Error("Failed to update invoice: " + error.message);
        }
    }
}
exports.ProformaPostService = ProformaPostService;
exports.proformaPostService = new ProformaPostService();
//# sourceMappingURL=proformaPost_service.js.map