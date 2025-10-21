"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyIqrService = void 0;
const m_VW_onlyinquiry_1 = require("../models/m_VW_onlyinquiry");
class OnlyIqrService {
    async getAll() {
        return m_VW_onlyinquiry_1.OnlyInquiryModel.getINQAll();
    }
}
exports.OnlyIqrService = OnlyIqrService;
//# sourceMappingURL=VW_onlyIqr_service.js.map