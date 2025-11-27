"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryAddService = void 0;
const m_VW_inquiryAdd_1 = require("../../models/m_VW_getinquiry/m_VW_inquiryAdd");
class InquiryAddService {
    async getINQAdd(inqcode) {
        return await m_VW_inquiryAdd_1.InquiryAddModel.getINQAdd(inqcode);
    }
}
exports.InquiryAddService = InquiryAddService;
//# sourceMappingURL=VW_inquiryAdd_service.js.map