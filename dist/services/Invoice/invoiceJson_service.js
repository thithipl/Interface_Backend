"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceJsonService = void 0;
const m_json_invoice_1 = require("../../models/m_invoice/View_invoice/m_json_invoice");
class InvoiceJsonService {
    async getInvoiceJson(invoiceCode) {
        return await m_json_invoice_1.detailInvoice_json.getInvoiceJson(invoiceCode);
    }
}
exports.InvoiceJsonService = InvoiceJsonService;
//# sourceMappingURL=invoiceJson_service.js.map