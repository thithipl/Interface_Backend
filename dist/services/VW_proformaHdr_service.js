"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaHdrService = void 0;
const m_VW_proformaHdr_1 = require("../models/m_VW_proformaHdr");
class ProformaHdrService {
    async getProformaHdrByPFMCode(pfm_Code) {
        return m_VW_proformaHdr_1.ProformaHdrModel.getProformaHdr(pfm_Code);
    }
}
exports.ProformaHdrService = ProformaHdrService;
//# sourceMappingURL=VW_proformaHdr_service.js.map