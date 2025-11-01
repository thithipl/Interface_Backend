"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDtlModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.ProformaDtlModel = {
    async getProformaDtl(pfm_Code) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getProformaDtl')
            .where('proforma_Code', pfm_Code)
            .select('*');
        return result;
    }
};
//# sourceMappingURL=m_VW_proformaDtl.js.map