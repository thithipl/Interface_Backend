"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryAllService = exports.InquiryDataService = void 0;
const m_VW_inquiryData_1 = require("../../models/m_VW_getinquiry/m_VW_inquiryData");
class InquiryDataService {
    async getAll() {
        return m_VW_inquiryData_1.InquiryDataModel.getINQData();
    }
    async getByINQCode(inqcode) {
        return m_VW_inquiryData_1.InquiryDataModel.getINQDataByINQCode(inqcode);
    }
}
exports.InquiryDataService = InquiryDataService;
class InquiryAllService {
    async getAll() {
        return m_VW_inquiryData_1.InquiryAllModel.getINQDataAll();
    }
    async getByINQCode(inqcode) {
        return m_VW_inquiryData_1.InquiryAllModel.getINQDataByINQCode(inqcode);
    }
}
exports.InquiryAllService = InquiryAllService;
//# sourceMappingURL=VW_inquiryData_service.js.map