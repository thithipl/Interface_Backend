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
export declare const detailInvoice_Hdr: {
    /**
     *
     * @param invoiceCode
     * @param proformaCode
     *
     */
    getDetailInvoice_Hdr(invoiceCode?: string): Promise<InvoiceHdrModel | undefined>;
    getInvoiceItems_Dtl(invoiceCode?: string): Promise<InvoiceItemsModel[]>;
};
//# sourceMappingURL=m_invoice_Hdr.d.ts.map