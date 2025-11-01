export interface Invoice {
    invoice_code: string
    proforma_code: string
    agent_code: string
    consignee_id: string
    invoice_of: string
    payment: string
    price_total: string
    currency_code: string
    price_item_total: string
    discount: string
    vat: string
    grand_total: string
    deposit: string
    delivery_term: string
    delivery_port_name: string
    due_date: string
    status: string
    remark: string
    shipping: Shipping[]
    items: Item[]
    claims: Claim[]
}

export interface Shipping {
    est_date: string
    etd: string
    eta: string
    pop: string
    from_port: string
    to_port: string
    fut40hq: string
    fut40: string
    fut20: string
    fright_fut40hq: string
    fright_fut40: string
    fright_fut20: string
    document_charge: string
    insurance_charge: string
    net_weight: string
    gross_weight: string
    measurement: string
    country_of_origin: string
    shipline: string
    status: string
}

export interface Item {
    proforma_code: string
    product_code: string
    unit_price: string
    qty: string
    unit: string
    amount: string
    pack_ctn: string
    ctn_total: string
    m3: string
    m3_total: string
    nw: string
    gw: string
    remark_customer: string
    remark_sales: string
}

export interface Claim {
    claim_code: string
}


export const InvoiceModel = {
    
}
