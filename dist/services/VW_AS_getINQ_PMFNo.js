"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INQPFMNoService = void 0;
const m_VW_AS_getINQ_PMFNo_1 = require("../models/m_VW_AS_getINQ_PMFNo");
class INQPFMNoService {
    async getDataInquiryPFMNo() {
        return m_VW_AS_getINQ_PMFNo_1.INQ_ProformaNoModel.getDataInquiryPFMNo();
    }
    async getDataInquiryCodePFMNO(pfmNo) {
        return m_VW_AS_getINQ_PMFNo_1.INQ_ProformaCodeModel.getDataInquiryCodePFMNO(pfmNo);
    }
}
exports.INQPFMNoService = INQPFMNoService;
//# sourceMappingURL=VW_AS_getINQ_PMFNo.js.map