import type { Quotation } from "../../models/quotation/m_quotation";
import { QuotationModel } from "../../models/quotation/m_quotation";


export class QuotationService {
    async getTop1000Quotations(): Promise<Quotation[]> {
        return QuotationModel.getTop1000();
    }

    async getQuotationByOrderNo(orderNo: string): Promise<Quotation | null> {
        return QuotationModel.getByOrderNo(orderNo);
    }
}
