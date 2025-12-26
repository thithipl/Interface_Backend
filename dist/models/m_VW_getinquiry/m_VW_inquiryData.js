"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryAllModel = exports.InquiryDataModel = void 0;
const index_1 = __importDefault(require("../../db/index"));
exports.InquiryDataModel = {
    async getINQData() {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiry')
            .select('*')
            .orderBy('created_at', 'desc');
    },
    async getINQDataByINQCode(inqcode) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiry')
            .where("inquiry_code", inqcode)
            .orderBy('created_at', 'desc')
            .select("*");
        return result;
    }
};
exports.InquiryAllModel = {
    async getINQDataAll() {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .select('*')
            .orderBy('created_at', 'desc');
    },
    async getINQDataByINQCode(inqcode) {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .where("inquiry_code", inqcode)
            .select("*")
            .orderBy('created_at', 'desc');
    }
};
//# sourceMappingURL=m_VW_inquiryData.js.map