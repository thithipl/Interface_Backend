import type { QuotationDtl } from "../../models/quotation/m_quotationDtl";
import { QuotationDtlModel } from "../../models/quotation/m_quotationDtl";

export class QuotationDtlService {
    async getQuotationDtlByTransactionNo(transactionNo: string): Promise<QuotationDtl[]> {
        return QuotationDtlModel.getByTransactionNo(transactionNo);
    }
}