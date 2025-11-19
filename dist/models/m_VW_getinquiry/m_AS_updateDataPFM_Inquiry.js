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
            // 1) นับจำนวน PFM_No ที่มีอยู่
            const countPFM = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("PFM_No", pfmNo)
                .count({ count: "*" })
                .first();
            const num = Number(countPFM?.count ?? 0);
            // 2) นับจำนวน PFM_No + customer_code ที่ตรงกัน
            const countPFM_Cust = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("PFM_No", pfmNo)
                .andWhere("company_code", custCode)
                .count({ count: "*" })
                .first();
            const num2 = Number(countPFM_Cust?.count ?? 0);
            // ✔ Check มี PFM_No อยู่ในระบบแล้ว
            if (num > 0) {
                // ✔ Check PFM_No + Customer ตรง → อัปเดต
                if (num2 > 0) {
                    const updated = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                        .where("inquiry_code", inquiryCode)
                        .update({
                        PFM_No: pfmNo,
                        FPI_status: "Success",
                        updated_at: index_1.default.fn.now(),
                    });
                    if (updated > 0) {
                        return { success: true, status: "Success", message: "Success" };
                    }
                    return {
                        success: false,
                        status: "Error",
                        message: "Unsuccess",
                    };
                }
                // มี PFM_No แต่ Customer ไม่ตรง
                return {
                    success: false,
                    status: "Error",
                    message: "ไม่สามารถบันทึก PFM No. ได้เนื่องจาก Customer Code ไม่ตรงกัน! กรุณาเลือก Inquiry ใหม่",
                };
            }
            // ✔ กรณีไม่พบ PFM_No เลย → อัปเดตได้ทันที
            const updatedNew = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("inquiry_code", inquiryCode)
                .update({
                PFM_No: pfmNo,
                FPI_status: "Success",
                updated_at: index_1.default.fn.now(),
            });
            if (updatedNew > 0) {
                return { success: true, status: "Success", message: "Success" };
            }
            return {
                success: false,
                status: "Error",
                message: "Unsuccess",
            };
        }
        catch (error) {
            console.error("updateDataPFM_Inquiry error:", error);
            return {
                success: false,
                status: "Error",
                message: "Unsuccess",
            };
        }
    },
};
//# sourceMappingURL=m_AS_updateDataPFM_Inquiry.js.map