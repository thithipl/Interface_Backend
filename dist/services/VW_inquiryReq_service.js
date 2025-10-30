"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryReqService = void 0;
const m_VW_inquiryReq_1 = require("../models/m_VW_getinquiry/m_VW_inquiryReq");
class InquiryReqService {
    async getINQReqByINQCode(inqcode) {
        return await m_VW_inquiryReq_1.InquiryReqModel.getINQReqByINQCode(inqcode);
    }
}
exports.InquiryReqService = InquiryReqService;
//# sourceMappingURL=VW_inquiryReq_service.js.map