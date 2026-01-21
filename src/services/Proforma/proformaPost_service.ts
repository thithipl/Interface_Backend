import axios from "axios";
import https from "node:https";
import { ProformaModelPost } from "../../models/m_proforma/m_proformaPost";

export class ProformaPostService {
    private readonly apiUrl = "https://www.fortuneparts.net/api/proforma/update";

    async postProforma(rawData: ProformaModelPost, token: string) {
        try {

            const hdr: any = rawData;
            const dtl: any[] = Array.isArray(rawData.items) ? rawData.items : [];

            const payload = {
                proforma_code: String(hdr.proforma_code || hdr.proforma_Code || "").trim(),
                inquiry_code: String(hdr.inquiry_code || "").trim(),

                agent_code: String(hdr.agent_code || ""),
                consignee_id: String(hdr.consignee_id || ""),

                invoice_of: String(hdr.invoice_of || hdr.Invoice_of || ""),
                sailling_to: String(hdr.sailling_to || hdr.Sailling_to || ""),
                billing_address: String(hdr.billing_address || ""),
                ship_to_port_name: String(hdr.ship_to_port_name || ""),
                payment: String(hdr.payment || ""),
                ourbank: String(hdr.ourbank || ""),
                est_date: hdr.est_date ? String(hdr.est_date).substring(0, 10) : null,

                discount_persent: String(hdr.discount_persent || "0"),
                discount: String(hdr.discount || "0"),
                fut40hq: String(hdr.fut40hq || "0"),
                fut40: String(hdr.fut40 || "0"),
                fut20: String(hdr.fut20 || "0"),
                fright_fut40hq: String(hdr.fright_fut40hq || "0"),
                fright_fut40: String(hdr.fright_fut40 || "0"),
                fright_fut20: String(hdr.fright_fut20 || "0"),
                document_charge: String(hdr.document_charge || "0"),
                insurance_charge: String(hdr.insurance_charge || "0"),
                grand_total: String(hdr.grand_total || "0"),

                price_term: String(hdr.price_term || ""),
                currency_code: String(hdr.currency_code || ""),
                payment_desc: String(hdr.payment_desc || ""),
                our_bank_desc: String(hdr.our_bank_desc || ""),
                remark: String(hdr.remark || ""),

                items: dtl.map((item: any) => ({
                    product_code: String(item.product_code || item.Product_code || ""),
                    unit_price: String(item.unit_price || "0"),
                    qty: String(item.qty || "0"),
                    unit: String(item.unit || ""),
                    amount: String(item.amount || "0"),
                    currency_code: String(item.currency_code || item.Currency || ""),
                    pack_ctn: String(item.pack_ctn || "0"),
                    ctn_total: String(item.ctn_total || "0"),
                    m3: String(item.m3 || "0"),
                    m3_total: String(item.m3_total || "0"),
                    nw: String(item.nw || "0"),
                    gw: String(item.gw || "0"),
                    cust_ref: String(item.cust_ref || ""),
                    stock: String(item.stock || "0"),
                    flag: String(item.flag || "N"),
                    remark_customer: String(item.remark_customer || ""),
                    remark_sales: String(item.remark_sales || ""),
                    is_urgent: String(item.is_urgent || "N"),
                    status: String(item.status || "offer"),
                }))
            };

            const agent = new https.Agent({
                rejectUnauthorized: false
            });

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "User-Agent": "PostmanRuntime/7.29.0",
                "Accept": "*/*",
                "Connection": "keep-alive"
            };

            const response = await axios.post(this.apiUrl, payload, {
                headers,
                httpsAgent: agent,
                timeout: 30000,
            });


            if (response.data) {
                return response.data;
            }

        } catch (error: any) {
            console.error(" ProformaPostService Error:", error.message);
            if (axios.isAxiosError(error) && error.response) {
                console.log("Status Code:", error.response.status);
                console.log("Body:", JSON.stringify(error.response.data, null, 2));
                const remoteMsg = error.response.data?.message || JSON.stringify(error.response.data);
                throw new Error(`External API Error (${error.response.status}): ${remoteMsg}`);
            }
            throw new Error("Failed to connect/update: " + error.message);
        }
    }
}

export const proformaPostService = new ProformaPostService();