import { InvoiceParam } from "../../models/m_invoice/m_invoicePost";
export declare class InvoiceService {
    private readonly apiUrl;
    updateInvoice(data: InvoiceParam, token: string): Promise<any>;
}
export declare const invoiceService: InvoiceService;
//# sourceMappingURL=invoice_service.d.ts.map