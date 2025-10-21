"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationDtlService = void 0;
const m_quotationDtl_1 = require("../models/m_quotationDtl");
class QuotationDtlService {
    async getQuotationDtlByTransactionNo(transactionNo) {
        return m_quotationDtl_1.QuotationDtlModel.getByTransactionNo(transactionNo);
    }
}
exports.QuotationDtlService = QuotationDtlService;
//# sourceMappingURL=quotationDtl_service.js.map