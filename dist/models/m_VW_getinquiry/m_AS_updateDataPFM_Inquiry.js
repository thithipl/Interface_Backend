"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryModel = void 0;
const index_1 = __importDefault(require("../../db/index"));
exports.InquiryModel = {
    async updateDataPFM_Inquiry(pfmNo, inquiryCode, custCode) {
        try {
            // 1) COUNT(*) PFM_No
            const result1 = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("PFM_No", pfmNo)
                .count({ count: "*" })
                .first();
            const num = Number(result1?.count ?? 0);
            // 2) COUNT(*) PFM_No + customer_code
            const result2 = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("PFM_No", pfmNo)
                .andWhere("company_code", custCode)
                .count({ count: "*" })
                .first();
            const num2 = Number(result2?.count ?? 0);
            // 3) ถ้ามี PFM_No อยู่แล้ว
            if (num > 0) {
                if (num2 > 0) {
                    const updated = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                        .where("inquiry_code", inquiryCode)
                        .update({
                        PFM_No: pfmNo,
                        FPI_status: "Success"
                    });
                    if (updated > 0) {
                        return { success: true, status: "Success", message: "Success" };
                    }
                    return { success: false, status: "Error", message: "Unsccuess" };
                }
                // → customer code ไม่ตรง
                return {
                    success: false,
                    status: "Error",
                    message: "ไม่สามารถบันทึก PFM No. ได้เนื่องจาก Customer Code ไม่ตรงกัน !, กรุณาเลือก Inquiry ใหม่"
                };
            }
            // 4) ไม่มี PFM_No → UPDATE ได้เลย
            const updatedNew = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("inquiry_code", inquiryCode)
                .update({
                PFM_No: pfmNo,
                FPI_status: "Success"
            });
            if (updatedNew > 0) {
                return { success: true, status: "Success", message: "Success" };
            }
            return { success: false, status: "Error", message: "Unsccuess" };
        }
        catch (error) {
            console.error("updateDataPFM_Inquiry error:", error);
            return { success: false, status: "Error", message: "Unsuccess" };
        }
    }
};
//# sourceMappingURL=m_AS_updateDataPFM_Inquiry.js.map