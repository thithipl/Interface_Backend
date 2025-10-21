"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProformaDataModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.ProformaDataModel = {
    async getAll() {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getProforma')
            .select('*');
    },
    async getByPFMNo(pfmNo) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getProforma')
            .where("proforma_Code", pfmNo)
            .select("*");
        return result;
    }
};
//# sourceMappingURL=m_VW_proformaData.js.map