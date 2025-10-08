import type { Quotation } from "../models/m_quotation";
import { QuotationModel } from "../models/m_quotation";


export class QuotationService {
    async getTop1000Quotations(): Promise<Quotation[]> {
        return QuotationModel.getTop1000();
    }

    async getQuotationByOrderNo(orderNo: string): Promise<Quotation | null> {
        return QuotationModel.getByOrderNo(orderNo);
    }
}
