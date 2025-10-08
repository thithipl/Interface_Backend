import type { QuotationDtl } from "../models/m_quotationDtl";
import { QuotationDtlModel } from "../models/m_quotationDtl";

export class QuotationDtlService {
    async getQuotationDtlByTransactionNo(transactionNo: string): Promise<QuotationDtl[]> {
        return QuotationDtlModel.getByTransactionNo(transactionNo);
    }
}