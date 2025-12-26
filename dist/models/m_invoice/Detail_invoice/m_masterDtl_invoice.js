"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailInvoice = void 0;
class MasterDetailInvoice {
    constructor(invoice, claims, items, shipping) {
        this.invoice = [];
        this.claims = [];
        this.items = [];
        this.shipping = [];
        this.invoice = invoice;
        this.claims = claims;
        this.items = items;
        this.shipping = shipping;
    }
}
exports.MasterDetailInvoice = MasterDetailInvoice;
//# sourceMappingURL=m_masterDtl_invoice.js.map