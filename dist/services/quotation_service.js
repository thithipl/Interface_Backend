"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationService = void 0;
const m_quotation_1 = require("../models/m_quotation");
class QuotationService {
    async getTop1000Quotations() {
        return m_quotation_1.QuotationModel.getTop1000();
    }
    async getQuotationByOrderNo(orderNo) {
        return m_quotation_1.QuotationModel.getByOrderNo(orderNo);
    }
}
exports.QuotationService = QuotationService;
//# sourceMappingURL=quotation_service.js.map