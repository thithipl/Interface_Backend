import type { Quotation } from "../../models/quotation/m_quotation";
export declare class QuotationService {
    getTop1000Quotations(): Promise<Quotation[]>;
    getQuotationByOrderNo(orderNo: string): Promise<Quotation | null>;
}
//# sourceMappingURL=quotation_service.d.ts.map