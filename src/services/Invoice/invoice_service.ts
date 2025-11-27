import axios from "axios";
import { InvoiceParam } from "../../models/m_invoice/m_invoicePost";
export class InvoiceService {
    private readonly apiUrl = "https://www.fortuneparts.net/api/invoice/update";

    async updateInvoice(data: InvoiceParam, token: string) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };

            const response = await axios.post(this.apiUrl, data, { headers });
            return response.data;
        } catch (error: any) {
            console.error("InvoiceService.updateInvoice error:", error.message);
            throw new Error("Failed to update invoice: " + error.message);
        }
    }
}

export const invoiceService = new InvoiceService();
