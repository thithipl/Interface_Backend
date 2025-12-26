import db from "../../../db/index";
import { InvoiceItemsModel } from '../Detail_invoice/m_invoive_Items';

export interface InvoiceHdrModel {
    invoice_code: string | null;
    proforma_code: string | null;
    agent_code: string | null;
    consignee_id: string | null;
    invoice_of: string | null;
    payment: string | null;
    price_total: number | null;
    currency_code: string | null;
    price_item_total: number | null;
    discount: number | null;
    vat: number | null;
    grand_total: number | null;
    deposit: number | null;
    delivery_term: string | null;
    delivery_port_name: string | null;
    due_date: Date | null;
    status: string | null;
    remark: string | null;
    Address: string | null;
    InvoiceFrom: string | null;
    InvoiceTo: string | null;
    invoicedate: Date | null;
    shipping: ShippingModel[];
    items: InvoiceItemsModel[];
    claims: InvoicClaimCode[];
}

export interface InvoicClaimCode {
    claim_code: string | null;
}

export interface ShippingModel {
    est_date: Date | null;
    etd: Date | null;
    eta: Date | null;
    pop: string | null;
    from_port: string;
    to_port: string;
    fut40hq: number | null;
    fut40: number | null;
    fut20: number | null;
    fright_fut40hq: number | null;
    fright_fut40: number | null;
    fright_fut20: number | null;
    document_charge: number | null;
    insurance_charge: number | null;
    net_weight: number | null;
    gross_weight: number | null;
    measurement: number | null;
    country_of_origin: string;
    shipline: string;
    status: string;
}

export interface ParsedInvoice {
    detail: InvoiceHdrModel[];
}


export const detailInvoice_Hdr = {
    /**
     *
     * @param invoiceCode
     * @param proformaCode
     *
     */
    async getDetailInvoice_Hdr(invoiceCode?: string): Promise<InvoiceHdrModel | undefined> {
        if (!invoiceCode) {
            return undefined;
        }
        let query = db<InvoiceHdrModel>('Autoshop.dbo.VW_AS_Invoice_mst');

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

        query = query.where('invoice_code', 'LIKE', searchPattern)
        query = query.select(...invoice_columns);

        const result = await query.first();
        return result;
    },

    async getInvoiceItems_Dtl(invoiceCode?: string): Promise<InvoiceItemsModel[]> {
        if (!invoiceCode) {
            return [];
        }
        let query = db<InvoiceItemsModel>('Autoshop.dbo.VW_AS_Invoice_mst');

        const searchPattern = `%${invoiceCode}%`;

        query = query.where('invoice_code', 'LIKE', searchPattern)
            .select('claim_code', 'invoice_code', 'ItemOrder', 'RefQuotationNo', 'proforma_code', 'product_code', 'unit_price', 'qty', 'unit', 'amount', 'pack_ctn', 'ctn_total', 'm3', 'm3_total', 'nw', 'gw', 'remark_customer', 'remark_sales', 'OurCode', 'Description')

        const result = await query;
        return result;
    },
}
