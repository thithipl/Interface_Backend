"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParsedInvoice = createParsedInvoice;
/**
 *
 * @param rawData
 */
function createParsedInvoice(rawData) {
    const safeParseFloat = (value) => Number.parseFloat(value) || 0;
    const safeParseInt = (value) => Number.parseInt(value, 10) || 0;
    const convertedItems = (rawData.items || []).map((item) => ({
        proforma_code: item.proforma_code || '',
        product_code: item.product_code || '',
        unit_price: safeParseFloat(item.unit_price),
        qty: item.qty || '',
        unit: item.unit || '',
        amount: safeParseFloat(item.amount),
        pack_ctn: safeParseInt(item.pack_ctn),
        ctn_total: safeParseInt(item.ctn_total),
        m3: item.m3 || '',
        m3_total: item.m3_total || '',
        nw: item.nw || '',
        gw: item.gw || '',
        remark_customer: item.remark_customer || '',
        remark_sales: item.remark_sales || '',
    }));
    const convertedClaims = (rawData.claims || []).map((claim) => ({
        claim_code: claim.claim_code || '',
    }));
    const convertedShipping = (rawData.shipping || []).map((shipping) => ({
        est_date: shipping.est_date ? new Date(shipping.est_date) : new Date(),
        etd: shipping.etd || '',
        eta: shipping.eta || '',
        pop: shipping.pop || '',
        from_port: shipping.from_port || '',
        to_port: shipping.to_port || '',
        fut40hq: shipping.fut40hq || '',
        fut40: shipping.fut40 || '',
        fut20: shipping.fut20 || '',
        fright_fut40hq: shipping.fright_fut40hq || '',
        fright_fut40: shipping.fright_fut40 || '',
        fright_fut20: shipping.fright_fut20 || '',
        document_charge: shipping.document_charge || '',
        insurance_charge: shipping.insurance_charge || '',
        net_weight: shipping.net_weight || '',
        gross_weight: shipping.gross_weight || '',
        measurement: shipping.measurement || '',
        country_of_origin: shipping.country_of_origin || '',
        shipline: shipping.shipline || '',
        status: shipping.status || '',
    }));
    const invoiceHeader = {
        invoice_code: rawData.invoice_code || '',
        proforma_code: rawData.proforma_code || '',
        agent_code: rawData.agent_code || '',
        consignee_id: rawData.consignee_id || '',
        invoice_of: rawData.invoice_of || '',
        payment: rawData.payment || '',
        price_total: rawData.price_total || '0.00',
        currency_code: rawData.currency_code || '',
        price_item_total: rawData.price_item_total || '0.00',
        discount: rawData.discount || '0.00',
        vat: rawData.vat || '0.00',
        grand_total: rawData.grand_total || '0.00',
        deposit: rawData.deposit || '',
        delivery_term: rawData.delivery_term || '',
        delivery_port_name: rawData.delivery_port_name || '',
        due_date: rawData.due_date ? new Date(rawData.due_date) : new Date(0),
        status: rawData.status || '',
        remark: rawData.remark || '',
        shipping: convertedShipping,
        items: convertedItems,
        claims: convertedClaims,
        // Additional fields
        id: rawData.id,
        company_id: rawData.company_id,
        company_contact_id: rawData.company_contact_id,
        is_active: rawData.is_active,
        created_by: rawData.created_by,
        created_at: rawData.created_at,
        updated_by: rawData.updated_by,
        updated_at: rawData.updated_at,
    };
    const parsedInvoice = {
        ...invoiceHeader,
        detail: invoiceHeader,
    };
    return parsedInvoice;
}
//# sourceMappingURL=invoice_parser.js.map