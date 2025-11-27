"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceService = exports.InvoiceService = void 0;
const axios_1 = __importDefault(require("axios"));
class InvoiceService {
    constructor() {
        this.apiUrl = "https://www.fortuneparts.net/api/invoice/update";
    }
    async updateInvoice(data, token) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const response = await axios_1.default.post(this.apiUrl, data, { headers });
            return response.data;
        }
        catch (error) {
            console.error("InvoiceService.updateInvoice error:", error.message);
            throw new Error("Failed to update invoice: " + error.message);
        }
    }
}
exports.InvoiceService = InvoiceService;
exports.invoiceService = new InvoiceService();
//# sourceMappingURL=invoice_service.js.map