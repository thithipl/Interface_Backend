"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotationDtlModel = void 0;
const index_1 = __importDefault(require("../../db/index"));
exports.QuotationDtlModel = {
    async getByTransactionNo(transactionNo) {
        const quotationdtl = await (0, index_1.default)('data_2003.dbo.QuotationDtl')
            .where("TransactionNo", transactionNo)
            .select("*");
        return quotationdtl;
    }
};
//# sourceMappingURL=m_quotationDtl.js.map