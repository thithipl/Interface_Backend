"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryModel = void 0;
const index_1 = __importDefault(require("../db/index"));
exports.InquiryModel = {
    async updateDataPFM_Inquiry(pfmNo, inquiryCode, custCode) {
        try {
            // เริ่ม query ตรวจสอบ PFM_No
            let query = (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst").where("PFM_No", pfmNo);
            // ถ้า custCode ไม่ว่าง → เพิ่มเงื่อนไข company_code
            if (custCode && custCode.trim() !== "") {
                query = query.andWhere("company_code", custCode);
            }
            const checkResult = await query.count("* as cnt");
            const count = Number(checkResult[0]?.cnt ?? 0);
            if (count <= 0) {
                return {
                    success: false,
                    status: "Error",
                    message: "ไม่สามารถบันทึก PFM No. ได้ เนื่องจาก Customer Code ไม่ตรงกัน หรือ PFM_No ไม่มีอยู่ในระบบ",
                };
            }
            // อัปเดต inquiry_code
            const updated = await (0, index_1.default)("Autoshop.dbo.AS_Inquiries_mst")
                .where("inquiry_code", inquiryCode)
                .update({
                PFM_No: pfmNo,
                FPI_Status: "Success",
                updated_at: index_1.default.fn.now(), // ถ้ามีคอลัมน์ updated_at
            });
            if (updated > 0) {
                return {
                    success: true,
                    status: "Success",
                    message: "Success",
                };
            }
            return {
                success: false,
                status: "Error",
                message: "ไม่พบ inquiry ที่ต้องการอัปเดต หรืออัปเดตไม่สำเร็จ",
            };
        }
        catch (error) {
            console.error("updateDataPFM_Inquiry error:", error);
            return {
                success: false,
                status: "Error",
                message: error.message,
            };
        }
    },
};
//# sourceMappingURL=m_AS_updateDataPFM_Inquiry.js.map