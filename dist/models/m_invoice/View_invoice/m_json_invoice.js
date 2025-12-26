"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailInvoice_json = void 0;
const index_1 = __importDefault(require("../../../db/index"));
exports.detailInvoice_json = {
    /**
    *
    * @param invoiceCode
    */
    async getInvoiceJson(invoiceCode) {
        if (!invoiceCode) {
            return [];
        }
        let query = (0, index_1.default)('Autoshop.dbo.vw_Invoice_JSON#2');
        const searchPattern = `${invoiceCode}%`;
        query = query.where('InvoiceCode', 'LIKE', searchPattern)
            .select('InvoiceCode', 'proforma_code', 'id', 'created_at', 'JSONOutput')
            .orderBy('created_at', 'desc')
            .limit(50);
        const result = await query.timeout(60000);
        return result;
    },
};
//# sourceMappingURL=m_json_invoice.js.map