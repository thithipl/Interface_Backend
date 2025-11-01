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
            .select('*');
    },
    async getINQDataByINQCode(inqcode) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiry')
            .where("inquiry_code", inqcode)
            .select("*");
        return result;
    }
};
exports.InquiryAllModel = {
    async getINQDataAll() {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .select('*');
    },
    async getINQDataByINQCode(inqcode) {
        return (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .where("inquiry_code", inqcode)
            .select("*");
    }
};
//# sourceMappingURL=m_VW_inquiryData.js.map