"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDataService = void 0;
const m_VW_proformaData_1 = require("../../models/m_proforma/m_VW_proformaData");
class ProformaDataService {
    async getAllProformaData() {
        return m_VW_proformaData_1.ProformaDataModel.getAll();
    }
    async getProformaDataByPFMNo(pfmNo) {
        return m_VW_proformaData_1.ProformaDataModel.getByPFMNo(pfmNo);
    }
}
exports.ProformaDataService = ProformaDataService;
;
//# sourceMappingURL=VW_profromaData_service.js.map