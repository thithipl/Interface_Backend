import type { JsonInvoice } from "../../models/m_invoice/View_invoice/m_json_invoice";
import { detailInvoice_json } from "../../models/m_invoice/View_invoice/m_json_invoice";

export class InvoiceJsonService {
    async getInvoiceJson(invoiceCode?: string): Promise<JsonInvoice[]> {
        return await detailInvoice_json.getInvoiceJson(invoiceCode);
    }
}