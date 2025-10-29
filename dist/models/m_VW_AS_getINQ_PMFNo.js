"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INQ_ProformaCodeModel = exports.INQ_ProformaNoModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.INQ_ProformaNoModel = {
    async getDataInquiryPFMNo() {
        return (0, index_1.default)("data_2003.dbo.VW_AS_getDataInquiryPFMNo").orderBy("id", "desc").select("*");
    },
};
exports.INQ_ProformaCodeModel = {
    async getDataInquiryCodePFMNO(pfmNo) {
        return (0, index_1.default)("data_2003.dbo.VW_AS_getDataInquiryCodePFMNo").where("PFM_No", pfmNo).select("*");
    },
};
//# sourceMappingURL=m_VW_AS_getINQ_PMFNo.js.map