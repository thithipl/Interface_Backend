"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryAddModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.InquiryAddModel = {
    async getINQAdd(inqcode) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryAdd')
            .where("inquiry_code", inqcode)
            .orderBy("id")
            .select("*");
        return result;
    }
};
//# sourceMappingURL=m_VW_inquiryAdd.js.map