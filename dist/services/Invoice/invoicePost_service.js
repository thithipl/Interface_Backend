"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceDataPostService = exports.InvoiceDataPostService = void 0;
const axios_1 = __importDefault(require("axios"));
const node_https_1 = __importDefault(require("node:https"));
class InvoiceDataPostService {
    constructor() {
        this.apiUrl = "https://www.fortuneparts.net/api/invoice/update";
    }
    async PostInvoice(rawData, token) {
        try {
            const payload = {
                invoice_code: String(rawData.invoice_code || "").trim(),
                proforma_code: String(rawData.proforma_code || "").trim(),
                agent_code: String(rawData.agent_code || ""),
                consignee_id: Number(rawData.consignee_id || 0),
                invoice_of: String(rawData.invoice_of || ""),
                payment: String(rawData.payment || ""),
                price_total: Number(rawData.price_total || 0),
                currency_code: String(rawData.currency_code || ""),
                price_item_total: Number(rawData.price_item_total || 0),
                discount: Number(rawData.discount || 0),
                vat: Number(rawData.vat || 0),
                grand_total: Number(rawData.grand_total || 0),
                deposit: Number(rawData.deposit || 0),
                delivery_term: String(rawData.delivery_term || ""),
                delivery_port_name: String(rawData.delivery_port_name || ""),
                due_date: rawData.due_date ? String(rawData.due_date) : null,
                status: String(rawData.status || ""),
                remark: rawData.remark ? String(rawData.remark) : null,
                shipping: Array.isArray(rawData.shipping) ? rawData.shipping.map(s => ({
                    est_date: s.est_date ? String(s.est_date) : null,
                    etd: s.etd ? String(s.etd) : null,
                    eta: s.eta ? String(s.eta) : null,
                    pop: String(s.pop || ""),
                    from_port: String(s.from_port || ""),
                    to_port: String(s.to_port || ""),
                    fut40hq: String(s.fut40hq || "0"),
                    fut40: String(s.fut40 || "0"),
                    fut20: String(s.fut20 || "0"),
                    fright_fut40hq: s.fright_fut40hq ? Number(s.fright_fut40hq) : null,
                    fright_fut40: s.fright_fut40 ? Number(s.fright_fut40) : null,
                    fright_fut20: s.fright_fut20 ? Number(s.fright_fut20) : null,
                    document_charge: s.document_charge ? Number(s.document_charge) : null,
                    insurance_charge: s.insurance_charge ? Number(s.insurance_charge) : null,
                    net_weight: s.net_weight ? Number(s.net_weight) : null,
                    gross_weight: s.gross_weight ? Number(s.gross_weight) : null,
                    measurement: s.measurement ? Number(s.measurement) : null,
                    country_of_origin: String(s.country_of_origin || ""),
                    shipline: String(s.shipline || "inprogress"),
                    status: String(s.statuss || "inprogress")
                    // status: String(s.statuss || "")
                    // statuss: String(s.statuss || "")
                })) : [],
                items: Array.isArray(rawData.items) ? rawData.items.map(item => ({
                    proforma_code: String(item.proforma_code || ""),
                    product_code: String(item.product_code || ""),
                    unit_price: Number(item.unit_price || 0),
                    qty: Number(item.qty || 0),
                    unit: String(item.unit || ""),
                    amount: Number(item.amount || 0),
                    pack_ctn: Number(item.pack_ctn || 0),
                    ctn_total: Number(item.ctn_total || 0),
                    m3: Number(item.m3 || 0),
                    m3_total: Number(item.m3_total || 0),
                    nw: Number(item.nw || 0),
                    gw: Number(item.gw || 0),
                    remark_customer: item.remark_customer ? String(item.remark_customer) : null,
                    remark_sales: item.remark_sales ? String(item.remark_sales) : null
                })) : [],
                claims: Array.isArray(rawData.claims) ? rawData.claims.map(c => ({
                    claim_code: String(c.claim_code || "")
                })) : []
            };
            const agent = new node_https_1.default.Agent({ rejectUnauthorized: false });
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "User-Agent": "PostmanRuntime/7.29.0",
                "Accept": "*/*"
            };
            const response = await axios_1.default.post(this.apiUrl, payload, {
                headers,
                httpsAgent: agent,
                timeout: 30000
            });
            console.log("✅ Invoice API Response:", JSON.stringify(response.data));
            if (!response.data && (response.status === 200 || response.status === 201)) {
                return { success: true, message: "Invoice posted successfully (No Content returned)" };
            }
            return response.data;
        }
        catch (error) {
            console.error("❌ Invoice Service Error:", error.message);
            if (axios_1.default.isAxiosError(error) && error.response) {
                console.error("API Error Body:", JSON.stringify(error.response.data));
                const msg = error.response.data?.message || JSON.stringify(error.response.data);
                throw new Error(`External API Error (${error.response.status}): ${msg}`);
            }
            throw error;
        }
    }
}
exports.InvoiceDataPostService = InvoiceDataPostService;
exports.invoiceDataPostService = new InvoiceDataPostService();
//# sourceMappingURL=invoicePost_service.js.map