export interface InvoiceParam  {
    invoice_code: string | null
    proforma_code: string | null
    agent_code: string | null
    consignee_id: string | null
    invoice_of: string | null
    payment: string | null
    price_total: string | null
    currency_code: string | null
    price_item_total: number | null
    discount: number | null
    vat: number | null
    grand_total: number | null
    deposit: number | null
    delivery_term: string | null
    delivery_port_name: string | null
    due_date: Date | null
    status: string | null
    remark: string | null
    shipping: Shipping[]
    items: Item[]
    claims: Claim[]
}

export interface Shipping {
    est_date: Date | null
    etd: Date | null
    eta: Date | null
    pop: string | null
    from_port: string | null
    to_port: string | null
    fut40hq: number | null
    fut40: number | null
    fut20: number | null
    fright_fut40hq: number | null
    fright_fut40: number | null
    fright_fut20: number | null
    document_charge: number | null
    insurance_charge: number | null
    net_weight: number | null
    gross_weight: number | null
    measurement: number | null
    country_of_origin: number | null
    shipline: string | null
    status: string | null
}

export interface Item {
    proforma_code: string | null
    product_code: string | null
    unit_price: number | null
    qty: number | null
    unit: string | null 
    amount: number | null
    pack_ctn: number | null
    ctn_total: number | null
    m3: number | null
    m3_total: number | null
    nw: number | null
    gw: number | null
    remark_customer: string | null
    remark_sales: string | null
}

export interface Claim {
    claim_code: string | null
}

export const defaultInvoiceParam: InvoiceParam = {
    invoice_code: "",
    proforma_code: "",
    agent_code: "",
    consignee_id: "",
    invoice_of: "",
    payment: "",
    price_total: "",
    currency_code: "",
    price_item_total: 0,
    discount: 0,
    vat: 0,
    grand_total: 0,
    deposit: 0,
    delivery_term: "",
    delivery_port_name: "",
    due_date: new Date(),
    status: "",
    remark: "",
    shipping: [],
    items: [],
    claims: [],
};
