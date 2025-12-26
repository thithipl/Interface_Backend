"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceJsonService = void 0;
const m_invoice_Hdr_1 = require("../../models/m_invoice/Detail_invoice/m_invoice_Hdr");
class InvoiceJsonService {
    async getInvoiceJson(invoiceCode) {
        return await m_invoice_Hdr_1.detailInvoice_Hdr.getDetailInvoice_Hdr(invoiceCode);
    }
    async getInvoiceItems(invoiceCode) {
        return await m_invoice_Hdr_1.detailInvoice_Hdr.getInvoiceItems_Dtl(invoiceCode);
    }
}
exports.InvoiceJsonService = InvoiceJsonService;
//# sourceMappingURL=invoiceJson_service.js.map