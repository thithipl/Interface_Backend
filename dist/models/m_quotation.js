"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.QuotationModel = {
    async getTop1000() {
        return (0, index_1.default)("data_2003.dbo.QuotationHdr")
            .select("*")
            .limit(1000);
    },
    async getByOrderNo(orderNo) {
        const quotation = await (0, index_1.default)("data_2003.dbo.QuotationHdr")
            .select("*")
            .where("OrderNo", orderNo)
            .first();
        return quotation || null;
    }
};
//# sourceMappingURL=m_quotation.js.map