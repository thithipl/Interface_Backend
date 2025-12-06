/**
 * @interface InvoiceItem
 * 
 * 
 */
export interface InvoiceItem {
    proforma_code: string | null
    product_code: string | null
    unit_price: number | null
    qty: string | null
    unit: string | null
    amount: number | null
    pack_ctn: number | null
    ctn_total: number | null
    m3: string | null
    m3_total: string | null
    nw: string | null
    gw: string | null
    remark_customer: string | null
    remark_sales: string | null
}

// -------------------------------------------------------------

/**
 * @interface InvoiceShipping
 * Represents the shipping details (may be an empty array if not defined).
 */
export interface InvoiceShipping {
    est_date: Date | null
    etd: string | null
    eta: string | null
    pop: string | null
    from_port: string | null
    to_port: string | null
    fut40hq: string | null
    fut40: string | null
    fut20: string | null
    fright_fut40hq: string | null
    fright_fut40: string | null
    fright_fut20: string | null
    document_charge: string | null
    insurance_charge: string | null
    net_weight: string | null
    gross_weight: string | null
    measurement: string | null
    country_of_origin: string | null
    shipline: string | null
    status: string | null
}

// -------------------------------------------------------------

/**
 * @interface InvoiceHeader
 * Represents the main header data of the invoice.
 * Note: due_date is converted to Date object.
 */
export interface InvoiceHeader {
    invoice_code: string | null
    proforma_code: string | null
    agent_code: string | null
    consignee_id: string | null
    invoice_of: string | null
    payment: string | null
    price_total: string | null
    currency_code: string | null
    price_item_total: string | null
    discount: string | null
    vat: string | null
    grand_total: string | null
    deposit: string | null
    delivery_term: string | null
    delivery_port_name: string | null
    due_date: Date | null
    status: string | null
    remark: string | null
    shipping: InvoiceShipping[];
    items: InvoiceItem[];
    claims: Claim[];

    id?: string;
    company_id?: string;
    company_contact_id?: string;
    is_active?: string;
    created_by?: string;
    created_at?: string;
    updated_by?: string;
    updated_at?: string;
}

/**
 * @interface Claim
 *
 * 
 */

export interface Claim {
    claim_code: string | null
}

// -------------------------------------------------------------

/**
 * @interface ParsedInvoice
 * The final structure for consumption, encapsulating the main data 
 * and duplicating it under the 'detail' key.
 */
export interface ParsedInvoice extends InvoiceHeader {
    detail: InvoiceHeader;
}