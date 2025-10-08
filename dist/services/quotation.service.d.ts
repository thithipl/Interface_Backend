import type { Quotation } from "../models/m_quotation";
export declare class QuotationService {
    getTop1000Quotations(): Promise<Quotation[]>;
    getQuotationByOrderNo(orderNo: string): Promise<Quotation | null>;
}
//# sourceMappingURL=quotation.service.d.ts.map