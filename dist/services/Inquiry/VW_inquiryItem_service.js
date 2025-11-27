"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryItemService = void 0;
const m_VW_inquiryItem_1 = require("../../models/m_VW_getinquiry/m_VW_inquiryItem");
class InquiryItemService {
    async getByINQCode(inqcode) {
        return m_VW_inquiryItem_1.InquiryItemModel.getINQItemDataByINQCode(inqcode);
    }
}
exports.InquiryItemService = InquiryItemService;
//# sourceMappingURL=VW_inquiryItem_service.js.map