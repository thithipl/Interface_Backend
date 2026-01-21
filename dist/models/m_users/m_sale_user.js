"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleUserModel = void 0;
const index_1 = __importDefault(require("../../db/index"));
class SaleUserModel {
    async findByUsername(username) {
        return await (0, index_1.default)('Fortune1.dbo.menuuser')
            .select('user_name', 'password', 'IsActive', 'emp_id', 'name_thai', 'name_eng', 'departmentcode', 'department')
            .where('user_name', username)
            .andWhere('IsActive', 1)
            .andWhere(builder => {
            builder.whereRaw("LTRIM(RTRIM(emp_id)) LIKE ?", ['%SAL%'])
                .orWhere('user_name', 'THITHANAWAT');
        })
            .first();
    }
}
exports.SaleUserModel = SaleUserModel;
//# sourceMappingURL=m_sale_user.js.map