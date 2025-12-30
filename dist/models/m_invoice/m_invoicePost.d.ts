export interface InvoiceModelPost {
    invoice_code: string;
    proforma_code: string;
    agent_code: string;
    consignee_id: number;
    invoice_of: string;
    payment: string;
    price_total: number;
    currency_code: string;
    price_item_total: number;
    discount: number;
    vat: number;
    grand_total: number;
    deposit: number;
    delivery_term: string;
    delivery_port_name: string;
    due_date: Date;
    status: string;
    remark: string | null;
    shipping: Shipping[];
    items: Item[];
    claims: Claim[];
}
export interface Shipping {
    est_date: Date;
    etd: Date;
    eta: Date;
    pop: string;
    from_port: string;
    to_port: string;
    fut40hq: number;
    fut40: number;
    fut20: number;
    fright_fut40hq: number;
    fright_fut40: number;
    fright_fut20: number;
    document_charge: number;
    insurance_charge: number;
    net_weight: number;
    gross_weight: number;
    measurement: number;
    country_of_origin: string;
    shipline: string;
    status: string;
}
export interface Item {
    proforma_code: string | null;
    product_code: string | null;
    unit_price: number | null;
    qty: number | null;
    unit: string | null;
    amount: number | null;
    pack_ctn: number | null;
    ctn_total: number | null;
    m3: number | null;
    m3_total: number | null;
    nw: number | null;
    gw: number | null;
    remark_customer: string | null;
    remark_sales: string | null;
}
export interface Claim {
    claim_code: string | null;
}
//# sourceMappingURL=m_invoicePost.d.ts.map