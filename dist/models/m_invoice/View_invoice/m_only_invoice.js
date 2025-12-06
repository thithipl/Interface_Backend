"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyInvoice = void 0;
const index_1 = __importDefault(require("../../../db/index"));
exports.emptyInvoice = {
    /**
     *
     * @param invoiceCode
     */
    async getOnlyInvoice(invoiceCode) {
        let query = (0, index_1.default)('Autoshop.dbo.vw_OnlyInvoice_JSON#2');
        if (invoiceCode) {
            const searchPattern = `%${invoiceCode}%`;
            query = query.where('InvoiceCode', 'LIKE', searchPattern);
        }
        query = query.orderBy('created_at', 'desc').select('*');
        if (!invoiceCode) {
            query = query.limit(100);
        }
        const result = await query;
        return result;
    },
};
//# sourceMappingURL=m_only_invoice.js.map