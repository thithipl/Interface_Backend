import type { OnlyInvoice } from "../../models/m_invoice/View_invoice/m_only_invoice";
import { emptyInvoice } from "../../models/m_invoice/View_invoice/m_only_invoice";

export class InvoiceOnlyCodeService {
    async getInvoice_Only(invoiceCode?: string): Promise<OnlyInvoice[]> {
        return emptyInvoice.getOnlyInvoice(invoiceCode);
    }
}