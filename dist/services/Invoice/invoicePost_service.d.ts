import { InvoiceModelPost } from "../../models/m_invoice/m_invoicePost";
export declare class InvoiceDataPostService {
    private readonly apiUrl;
    PostInvoice(rawData: InvoiceModelPost, token: string): Promise<any>;
}
export declare const invoiceDataPostService: InvoiceDataPostService;
//# sourceMappingURL=invoicePost_service.d.ts.map