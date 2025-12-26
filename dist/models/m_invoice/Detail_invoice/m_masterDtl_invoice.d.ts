import { InvoiceHdrModel } from '../Detail_invoice/m_invoice_Hdr';
import { InvoiceClaim } from '../Detail_invoice/m_invoice_Claim';
import { InvoiceItem } from '../Detail_invoice/m_invoice_Item';
import { InvoiceShippingDtl } from '../Detail_invoice/m_invoice_Ship';
export declare class MasterDetailInvoice {
    invoice: InvoiceHdrModel[];
    claims: InvoiceClaim[];
    items: InvoiceItem[];
    shipping: InvoiceShippingDtl[];
    constructor(invoice: InvoiceHdrModel[], claims: InvoiceClaim[], items: InvoiceItem[], shipping: InvoiceShippingDtl[]);
}
//# sourceMappingURL=m_masterDtl_invoice.d.ts.map