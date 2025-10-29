"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryItemModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.InquiryItemModel = {
    async getINQItemDataByINQCode(inqcode) {
        const result = await (0, index_1.default)('Autoshop.dbo.VW_AS_getDataInquiryItems')
            .where("inquiry_code", inqcode)
            .orderBy("id")
            .select("*");
        return result;
    }
};
//# sourceMappingURL=m_VW_inquiryItem.js.map