"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParsedInvoice = createParsedInvoice;
/**
 *
 * @param rawData
 * @param rawItemData
 * @returns ParsedInvoice
 *
 */
function createParsedInvoice(rawData, rawItemData) {
    if (!rawData || rawData.length === 0) {
        return { detail: [] };
    }
    const convertedHeaders = rawData.map((rawHeader) => {
        const singleShipping = rawHeader ? [{
                est_date: rawHeader.est_date ? new Date(rawHeader.est_date) : null,
                etd: rawHeader.etd ? new Date(rawHeader.etd) : null,
                eta: rawHeader.eta ? new Date(rawHeader.eta) : null,
                pop: rawHeader.pop || null,
                from_port: rawHeader.from_port || '',
                to_port: rawHeader.to_port || '',
                fut40hq: rawHeader.fut40hq ?? 0,
                fut40: rawHeader.fut40 ?? 0,
                fut20: rawHeader.fut20 ?? 0,
                fright_fut40hq: rawHeader.fright_fut40hq ?? 0,
                fright_fut40: rawHeader.fright_fut40 ?? 0,
                fright_fut20: rawHeader.fright_fut20 ?? 0,
                document_charge: rawHeader.document_charge ?? null,
                insurance_charge: rawHeader.insurance_charge ?? null,
                net_weight: rawHeader.net_weight ?? null,
                gross_weight: rawHeader.gross_weight ?? null,
                measurement: rawHeader.measurement ?? null,
                country_of_origin: rawHeader.country_of_origin || '',
                shipline: rawHeader.shipline || '',
                statuss: rawHeader.statuss || '',
            }] : [];
        const invoiceItem = (rawItemData || []).map((item) => ({
            proforma_code: item.proforma_code || null,
            product_code: item.product_code || null,
            unit_price: item.unit_price ?? null,
            qty: item.qty ?? null,
            unit: item.unit ?? null,
            amount: item.amount ?? null,
            pack_ctn: item.pack_ctn ?? null,
            ctn_total: item.ctn_total ?? null,
            m3: item.m3 ?? null,
            m3_total: item.m3_total ?? null,
            nw: item.nw ?? null,
            gw: item.gw ?? null,
            remark_customer: item.remark_customer || null,
            remark_sales: item.remark_sales || null,
            OurCode: item.OurCode || null,
            Description: item.Description || null
        }));
        const invoiceHdr = {
            invoice_code: rawHeader.invoice_code || '',
            proforma_code: rawHeader.proforma_code || '',
            agent_code: rawHeader.agent_code || '',
            consignee_id: rawHeader.consignee_id || '',
            invoice_of: rawHeader.invoiceOf || '',
            payment: (rawHeader.payment || '').trim(),
            price_total: rawHeader.price_total ?? 0,
            currency_code: rawHeader.currency_code || '',
            price_item_total: rawHeader.price_item_total ?? 0,
            discount: rawHeader.discount ?? null,
            vat: rawHeader.vat ?? null,
            grand_total: rawHeader.grand_total ?? 0,
            deposit: rawHeader.deposit ?? 0,
            delivery_term: rawHeader.delivery_term || '',
            delivery_port_name: rawHeader.delivery_port_name || '',
            due_date: rawHeader.due_date ? new Date(rawHeader.due_date) : new Date(),
            status: rawHeader.status || '',
            remark: rawHeader.Remarks || null,
            Address: rawHeader.Address || null,
            InvoiceFrom: rawHeader.InvoiceFrom || null,
            InvoiceTo: rawHeader.InvoiceTo || null,
            invoicedate: rawHeader.invoicedate ? new Date(rawHeader.invoicedate) : new Date(),
            pfmDate: rawHeader.pfmDate ? new Date(rawHeader.pfmDate) : new Date(),
            shipping: singleShipping,
            items: invoiceItem,
            claims: rawHeader.claim_code
                ? [{ claim_code: rawHeader.claim_code }]
                : [{ claim_code: '' }],
        };
        return invoiceHdr;
    });
    return {
        detail: convertedHeaders,
    };
}
;
//# sourceMappingURL=invoice_parser.js.map