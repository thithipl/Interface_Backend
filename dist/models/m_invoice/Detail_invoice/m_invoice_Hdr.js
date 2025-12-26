"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailInvoice_Hdr = void 0;
const index_1 = __importDefault(require("../../../db/index"));
exports.detailInvoice_Hdr = {
    /**
     *
     * @param invoiceCode
     * @param proformaCode
     *
     */
    async getDetailInvoice_Hdr(invoiceCode) {
        if (!invoiceCode) {
            return undefined;
        }
        let query = (0, index_1.default)('Autoshop.dbo.VW_AS_Invoice_mst');
        const searchPattern = `%${invoiceCode}%`;
        const invoice_columns = [
            'invoice_code', 'proforma_code', 'agent_code', 'consignee_id', 'invoiceOf',
            'payment', 'price_total', 'currency_code', 'price_item_total', 'discount', 'vat',
            'grand_total', 'deposit', 'delivery_term', 'delivery_port_name', 'due_date',
            'status', 'Remarks', 'est_date', 'etd', 'eta', 'pop', 'from_port', 'to_port',
            'fut40hq', 'fut40', 'fut20', 'fut40_NOR', 'fut40_OT', 'fright_fut40hq',
            'document_charge', 'insurance_charge', 'net_weight', 'gross_weight', 'measurement',
            'country_of_origin', 'shipline', 'statuss', 'claim_code', 'invoicedate', 'Address', 'InvoiceFrom', 'InvoiceTo',
        ];
        // const invoice_columns = [
        //     'invoice_code', 'proforma_code', 'agent_code', 'consignee_id', 'invoiceOf',
        //     'payment', 'price_total', 'currency_code', 'price_item_total', 'discount', 'vat',
        //     'grand_total', 'deposit', 'delivery_term', 'delivery_port_name', 'due_date',
        //     'status', 'Remarks',
        // ];
        query = query.where('invoice_code', 'LIKE', searchPattern);
        query = query.select(...invoice_columns);
        const result = await query.first();
        return result;
    },
    async getInvoiceItems_Dtl(invoiceCode) {
        if (!invoiceCode) {
            return [];
        }
        let query = (0, index_1.default)('Autoshop.dbo.VW_AS_Invoice_mst');
        const searchPattern = `%${invoiceCode}%`;
        query = query.where('invoice_code', 'LIKE', searchPattern)
            .select('claim_code', 'invoice_code', 'ItemOrder', 'RefQuotationNo', 'proforma_code', 'product_code', 'unit_price', 'qty', 'unit', 'amount', 'pack_ctn', 'ctn_total', 'm3', 'm3_total', 'nw', 'gw', 'remark_customer', 'remark_sales', 'OurCode', 'Description');
        const result = await query;
        return result;
    },
};
//# sourceMappingURL=m_invoice_Hdr.js.map