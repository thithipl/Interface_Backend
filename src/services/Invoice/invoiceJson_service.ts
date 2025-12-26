import type { InvoiceHdrModel } from "../../models/m_invoice/Detail_invoice/m_invoice_Hdr";
import { detailInvoice_Hdr } from "../../models/m_invoice/Detail_invoice/m_invoice_Hdr";
import { InvoiceItemsModel } from '../../models/m_invoice/Detail_invoice/m_invoive_Items';

export class InvoiceJsonService {
    async getInvoiceJson(invoiceCode?: string): Promise<InvoiceHdrModel | undefined> {
        return await detailInvoice_Hdr.getDetailInvoice_Hdr(invoiceCode);
    }

    async getInvoiceItems(invoiceCode?: string): Promise<InvoiceItemsModel[]> {
        return await detailInvoice_Hdr.getInvoiceItems_Dtl(invoiceCode);
    }
}