"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyInquiryModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.OnlyInquiryModel = {
    async getINQAll() {
        const rows = await (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .select('id', 'inquiry_code', 'PFM_No')
            .orderBy('inquiry_code', 'desc');
        return rows;
    },
};
//# sourceMappingURL=m_VW_onlyinquiry.js.map