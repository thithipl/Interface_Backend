"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceOnlyCodeService = void 0;
const m_only_invoice_1 = require("../../models/m_invoice/View_invoice/m_only_invoice");
class InvoiceOnlyCodeService {
    async getInvoice_Only(invoiceCode) {
        return m_only_invoice_1.emptyInvoice.getOnlyInvoice(invoiceCode);
    }
}
exports.InvoiceOnlyCodeService = InvoiceOnlyCodeService;
//# sourceMappingURL=invoiceCode_service.js.map