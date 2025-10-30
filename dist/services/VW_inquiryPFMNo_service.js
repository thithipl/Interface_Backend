"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryCodePFMNoService = void 0;
const m_VW_inquiryPFMNo_1 = require("../models/m_VW_inquiryPFMNo");
class InquiryCodePFMNoService {
    async LoadInquiryPFMNo() {
        return m_VW_inquiryPFMNo_1.LoadDataInquiryPFMNoModel.getDataAllInquiryPFMNo();
    }
}
exports.InquiryCodePFMNoService = InquiryCodePFMNoService;
;
//# sourceMappingURL=VW_inquiryPFMNo_service.js.map