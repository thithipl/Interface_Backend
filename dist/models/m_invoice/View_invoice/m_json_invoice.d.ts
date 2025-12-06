export interface JsonInvoice {
    InvoiceCode: string;
    proforma_code: string;
    id: number;
    created_at: Date;
    JSONOutput: string;
}
export declare const detailInvoice_json: {
    /**
    *
    * @param invoiceCode
    */
    getInvoiceJson(invoiceCode?: string): Promise<JsonInvoice[]>;
};
//# sourceMappingURL=m_json_invoice.d.ts.map