"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryService = void 0;
const m_AS_updateDataPFM_Inquiry_1 = require("../models/m_AS_updateDataPFM_Inquiry");
class InquiryService {
    async updatePFM(pfmNo, inquiryCode, custCode = "") {
        return m_AS_updateDataPFM_Inquiry_1.InquiryModel.updateDataPFM_Inquiry(pfmNo, inquiryCode, custCode);
    }
}
exports.InquiryService = InquiryService;
//# sourceMappingURL=AS_updatePFM_Inquiry.js.map