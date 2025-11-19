import db from "../../db/index";

export interface UpdatePFMResult {
  success: boolean;
  status: "Success" | "Error";
  message: string;
}

export const InquiryModel = {
  async updateDataPFM_Inquiry(
    pfmNo: string,
    inquiryCode: string,
    custCode: string
  ): Promise<UpdatePFMResult> {
    try {
      // 1) นับจำนวน PFM_No ที่มีอยู่
      const countPFM = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .count<{ count: number }>({ count: "*" })
        .first();

      const num = Number(countPFM?.count ?? 0);

      // 2) นับจำนวน PFM_No + customer_code ที่ตรงกัน
      const countPFM_Cust = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .andWhere("company_code", custCode)
        .count<{ count: number }>({ count: "*" })
        .first();

      const num2 = Number(countPFM_Cust?.count ?? 0);


      // ✔ Check มี PFM_No อยู่ในระบบแล้ว
      if (num > 0) {
        // ✔ Check PFM_No + Customer ตรง → อัปเดต
        if (num2 > 0) {
          const updated = await db("Autoshop.dbo.AS_Inquiries_mst")
            .where("inquiry_code", inquiryCode)
            .update({
              PFM_No: pfmNo,
              FPI_status: "Success",
              updated_at: db.fn.now(),
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
          message:
            "ไม่สามารถบันทึก PFM No. ได้เนื่องจาก Customer Code ไม่ตรงกัน! กรุณาเลือก Inquiry ใหม่",
        };
      }

      // ✔ กรณีไม่พบ PFM_No เลย → อัปเดตได้ทันที
      const updatedNew = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("inquiry_code", inquiryCode)
        .update({
          PFM_No: pfmNo,
          FPI_status: "Success",
          updated_at: db.fn.now(),
        });

      if (updatedNew > 0) {
        return { success: true, status: "Success", message: "Success" };
      }

      return {
        success: false,
        status: "Error",
        message: "Unsuccess",
      };
    } catch (error: any) {
      console.error("updateDataPFM_Inquiry error:", error);
      return {
        success: false,
        status: "Error",
        message: "Unsuccess",
      };
    }
  },
};
