import axios from "axios";
import https from "node:https";
import { ProformaModelPost } from "../../models/m_proforma/m_proformaPost";

export class ProformaPostService {
    private readonly apiUrl = "https://www.fortuneparts.net/api/proforma/update";

    async postProforma(rawData: ProformaModelPost, token: string) {
        try {

            console.log("Raw Data received in Service:", JSON.stringify(rawData));
            // ดึง header และ details ออกมาจาก rawData เพื่อให้เรียกใช่ง่ายขึ้น
            let hdr = rawData.header;
            let dtl = rawData.items;

            // ---------------------------------------------------------
            // 1. DATA SANITIZATION & MAPPING
            // ---------------------------------------------------------
            // สร้าง Payload ใหม่ โดยดึงค่าจาก 'hdr' (header) มาใส่

            if (!hdr) {
                console.warn("Warning: 'header' property missing. Assuming flat structure.");
                // Cast เป็น any เพื่อให้ข้าม Type check ชั่วคราว
                hdr = rawData as any;
                dtl = (rawData as any).items || (rawData as any).details || [];
            }

            // --- 3. ป้องกัน Error: ถ้ายังหา hdr ไม่เจออีก ให้หยุดทำงาน ---
            if (!hdr) {
                throw new Error("Invalid Data Format: Missing 'header' information.");
            }
            const payload = {
                // Map ชื่อ field ให้ตรงกับที่ API ปลายทางต้องการ (ดูจาก C# Code)
                proforma_code: hdr.proforma_code,
                inquiry_code: hdr.inquiry_code ? hdr.inquiry_code.toString().trim() : "",

                // Logic สำคัญจาก C#: ถ้าค่าว่างให้ส่ง 0
                agent_code: hdr.agent_code || 0,
                consignee_id: hdr.consignee_id || 0,

                // ข้อมูลอื่นๆ ใน Header
                invoice_of: hdr.invoice_of || "",
                sailling_to: hdr.Sailling_to || "", // สังเกตตัว S ใหญ่ตาม Interface คุณ
                billing_address: hdr.billing_address || "",
                ship_to_port_name: hdr.ship_to_port_name || "",
                payment: hdr.payment || "",
                ourbank: hdr.ourbank || "",
                est_date: hdr.est_date || null,

                // แปลงตัวเลข (Number)
                discount_persent: Number(hdr.discount_persent || 0),
                discount: Number(hdr.discount || 0),
                fut40hq: Number(hdr.fut40hq || 0),
                fut40: Number(hdr.fut40 || 0),
                fut20: Number(hdr.fut20 || 0),
                fright_fut40hq: Number(hdr.fright_fut40hq || 0),
                fright_fut40: Number(hdr.fright_fut40 || 0),
                fright_fut20: Number(hdr.fright_fut20 || 0),
                document_charge: Number(hdr.document_charge || 0),
                insurance_charge: Number(hdr.insurance_charge || 0),
                grand_total: Number(hdr.grand_total || 0),

                price_term: hdr.price_term || "",
                currency_code: hdr.currency_code || "",
                payment_desc: hdr.payment_desc || "",
                our_bank_desc: hdr.our_bank_desc || "",
                remark: hdr.remark || "",

                // จัดการ Items (ดึงจาก details)
                // *** คุณต้องตรวจสอบชื่อ field ใน dtl (ProformaDtl) ด้วยว่าชื่อตรงกันไหม ***
                items: dtl.map((item: any) => ({
                    product_code: item.product_code || item.Product_code, // กันเหนียวเรื่องตัวพิมพ์เล็ก/ใหญ่
                    qty: Number(item.qty || 0),
                    unit_price: Number(item.unit_price || 0),
                    amount: Number(item.amount || 0),
                    unit: item.unit || "",
                    currency_code: item.currency_code || "",
                    pack_ctn: Number(item.pack_ctn || 0),
                    ctn_total: Number(item.ctn_total || 0),
                    m3: Number(item.m3 || 0),
                    m3_total: Number(item.m3_total || 0),
                    nw: Number(item.nw || 0),
                    gw: Number(item.gw || 0),
                    cust_ref: item.cust_ref || "",
                    stock: Number(item.stock || 0),
                    flag: item.flag || "",
                    remark_customer: item.remark_customer || "",
                    remark_sales: item.remark_sales || "",
                    is_urgent: item.is_urgent || item.urgent || "", // เดาชื่อ field จาก C#
                    status: item.status || ""
                }))
            };

            // ---------------------------------------------------------
            // 2. CONFIGURATION (SSL & Headers)
            // ---------------------------------------------------------
            const agent = new https.Agent({
                rejectUnauthorized: false
            });

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };

            console.log("Sending Payload Size:", JSON.stringify(payload).length, "bytes");

            // ---------------------------------------------------------
            // 3. SEND REQUEST
            // ---------------------------------------------------------
            const response = await axios.post(this.apiUrl, payload, {
                headers,
                httpsAgent: agent,
                timeout: 30000
            });

            // ---------------------------------------------------------
            // 4. RESPONSE HANDLING
            // ---------------------------------------------------------
            if (response.data) {
                return response.data;
            }

            if (response.status === 200 || response.status === 201) {
                return {
                    success: true,
                    message: "Update Successful (No content returned)",
                    data: null
                };
            }

            return response.data;

        } catch (error: any) {
            console.error("ProformaPostService Error:", error.message);

            if (axios.isAxiosError(error) && error.response) {
                console.error("API Status:", error.response.status);
                // console.error("API Data:", JSON.stringify(error.response.data)); // เปิดถ้าอยากเห็น detail

                const remoteMsg = error.response.data?.message || JSON.stringify(error.response.data);
                throw new Error(`External API Error (${error.response.status}): ${remoteMsg}`);
            }

            throw new Error("Failed to connect/update: " + error.message);
        }
    }
}

export const proformaPostService = new ProformaPostService();