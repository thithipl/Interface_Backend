export interface OnlyInvoice {
    InvoiceCode: string;
    proforma_code: string;
    id: number;
    created_at: Date;
}
export declare const emptyInvoice: {
    /**
     *
     * @param invoiceCode
     */
    getOnlyInvoice(invoiceCode?: string): Promise<OnlyInvoice[]>;
};
//# sourceMappingURL=m_only_invoice.d.ts.map