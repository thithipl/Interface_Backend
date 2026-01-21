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
    custCode: string | null
  ): Promise<UpdatePFMResult> {
    try {
      console.log("updateDataPFM_Inquiry Input:", { pfmNo, inquiryCode, custCode });
      const safeCustCode = custCode === undefined ? null : custCode;

      const result1 = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .count('* as total')
        .first();

      const num = Number(result1?.count ?? 0);
      console.log("Check PFM Exists (num):", num);

      const result2 = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("PFM_No", pfmNo)
        .andWhere("company_code", safeCustCode)
        .count('* as total')
        .first();

      const num2 = Number(result2?.count ?? 0);

      console.log("--- Debug Update ---");
      console.log("Param inquiryCode:", `"${inquiryCode}"`);

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
          } else {
            return { success: false, status: "Error", message: "Update Failed: Inquiry Code not found" };
          }
        }

        return {
          success: false,
          status: "Error",
          message:
            "ไม่สามารถบันทึก PFM No. ได้เนื่องจาก Customer Code ไม่ตรงกัน !, กรุณาเลือก Inquiry ใหม่"
        };
      }

      const updatedNew = await db("Autoshop.dbo.AS_Inquiries_mst")
        .where("inquiry_code", inquiryCode)
        .update({
          PFM_No: pfmNo,
          FPI_status: "Success"
        });

      if (updatedNew) {
        return { success: true, status: "Success", message: "Success" };
      }

      return { success: false, status: "Error", message: "Unsccuess" };
    } catch (error) {
      console.error("updateDataPFM_Inquiry error:", error);
      return { success: false, status: "Error", message: "Unsuccess" };
    }
  }
};



// import db from "../../db/index";

// export interface UpdatePFMResult {
//   success: boolean;
//   status: "Success" | "Error";
//   message: string;
// }

// export const InquiryModel = {
//   async updateDataPFM_Inquiry(
//     pfmNo: string,
//     inquiryCode: string,
//     custCode: string | null
//   ): Promise<UpdatePFMResult> {
//     try {
//       console.log("updateDataPFM_Inquiry Input:", { pfmNo, inquiryCode, custCode });
//       const safeCustCode = custCode === undefined ? null : custCode;

//       const result1 = await db("Autoshop.dbo.AS_Inquiries_mst")
//         .where("PFM_No", pfmNo)
//         .count('* as total')
//         .first();

//       const num = Number(result1?.count ?? 0);
//       console.log("Check PFM Exists (num):", num);

//       const result2 = await db("Autoshop.dbo.AS_Inquiries_mst")
//         .where("PFM_No", pfmNo)
//         .andWhere("company_code", safeCustCode)
//         .count('* as total')
//         .first();

//       const num2 = Number(result2?.count ?? 0);

//       console.log("--- Debug Update ---");
//       console.log("Param inquiryCode:", `"${inquiryCode}"`);
//       let updatedCount = 0;

//       if (num > 0) {
//         if (num2 > 0) {
//           // Update กรณีเป็นเจ้าของเดิม
//           updatedCount = await db("Autoshop.dbo.AS_Inquiries_mst")
//             .where("inquiry_code", inquiryCode) // ลองใส่ .trim() ดูถ้าจำเป็น
//             .update({
//               PFM_No: pfmNo,
//               FPI_status: "Success"
//             });

//           console.log("Updated (Existing PFM):", updatedCount, "rows");
//         } else {
//           return { success: false, status: "Error", message: "Customer Code ไม่ตรง" };
//         }
//       } else {
//         // Update กรณี PFM ใหม่
//         updatedCount = await db("Autoshop.dbo.AS_Inquiries_mst")
//           .where("inquiry_code", inquiryCode)
//           .update({
//             PFM_No: pfmNo,
//             FPI_status: "Success"
//           });

//         console.log("Updated (New PFM):", updatedCount, "rows");
//       }

//       // เช็คจำนวน Row ที่ถูกกระทบจริงๆ
//       if (updatedCount > 0) {
//         return { success: true, status: "Success", message: "Success" };
//       } else {
//         // นี่คือจุดสำคัญ! ถ้า API ผ่านแต่ DB ไม่เปลี่ยน มันจะตกที่นี่
//         console.warn("API Success logic, but ZERO rows updated in DB!");
//         return {
//           success: false,
//           status: "Error",
//           message: `หา Inquiry Code: ${inquiryCode} ไม่เจอ หรือข้อมูลเหมือนเดิมอยู่แล้ว`
//         };
//       }
//     } catch (error) {
//       console.error("updateDataPFM_Inquiry error:", error);
//       return { success: false, status: "Error", message: "Unsuccess" };
//     }
//   }
// };
