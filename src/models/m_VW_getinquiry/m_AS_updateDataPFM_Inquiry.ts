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
      // 1) COUNT(*) PFM_No
      const result1 = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .count<{ count: number }>({ count: "*" })
        .first();

      const num = Number(result1?.count ?? 0);

      // 2) COUNT(*) PFM_No + customer_code
      const result2 = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .andWhere("company_code", custCode)
        .count<{ count: number }>({ count: "*" })
        .first();

      const num2 = Number(result2?.count ?? 0);

      // 3) ถ้ามี PFM_No อยู่แล้ว
      if (num > 0) {
        if (num2 > 0) {
          const updated = await db("Autoshop.dbo.AS_Inquiries_mst")
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
          message:
            "ไม่สามารถบันทึก PFM No. ได้เนื่องจาก Customer Code ไม่ตรงกัน !, กรุณาเลือก Inquiry ใหม่"
        };
      }

      // 4) ไม่มี PFM_No → UPDATE ได้เลย
      const updatedNew = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("inquiry_code", inquiryCode)
        .update({
          PFM_No: pfmNo,
          FPI_status: "Success"
        });

      if (updatedNew > 0) {
        return { success: true, status: "Success", message: "Success" };
      }

      return { success: false, status: "Error", message: "Unsccuess" };
    } catch (error) {
      console.error("updateDataPFM_Inquiry error:", error);
      return { success: false, status: "Error", message: "Unsuccess" };
    }
  }
};
