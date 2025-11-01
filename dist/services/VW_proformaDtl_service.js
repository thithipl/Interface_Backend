"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDtlService = void 0;
const m_VW_proformaDtl_1 = require("../models/m_VW_proformaDtl");
class ProformaDtlService {
    async getProformaDtlByPFMCode(pfm_Code) {
        return m_VW_proformaDtl_1.ProformaDtlModel.getProformaDtl(pfm_Code);
    }
}
exports.ProformaDtlService = ProformaDtlService;
//# sourceMappingURL=VW_proformaDtl_service.js.map