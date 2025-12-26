import type { InvoiceHdrModel } from "../../models/m_invoice/Detail_invoice/m_invoice_Hdr";
import { InvoiceItemsModel } from '../../models/m_invoice/Detail_invoice/m_invoive_Items';
export declare class InvoiceJsonService {
    getInvoiceJson(invoiceCode?: string): Promise<InvoiceHdrModel | undefined>;
    getInvoiceItems(invoiceCode?: string): Promise<InvoiceItemsModel[]>;
}
//# sourceMappingURL=invoiceJson_service.d.ts.map