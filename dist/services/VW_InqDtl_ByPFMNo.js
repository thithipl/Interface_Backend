"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryDtlByPFMNoService = void 0;
const m_VW_inquiryDtlByPFMNo_1 = require("../models/m_VW_getinquiry/m_VW_inquiryDtlByPFMNo");
class InquiryDtlByPFMNoService {
    async getDataDTLInquiry(pfmcode) {
        return await m_VW_inquiryDtlByPFMNo_1.DTLInquiryByPFMNoModel.getDataDTLInquiry(pfmcode);
    }
}
exports.InquiryDtlByPFMNoService = InquiryDtlByPFMNoService;
//# sourceMappingURL=VW_InqDtl_ByPFMNo.js.map