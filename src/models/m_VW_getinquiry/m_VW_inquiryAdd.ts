import db from "../../db/index";

export interface InquiryAdd {
    id: number;
    inquiryCode: string
    productCode: string
    code: string
    ourCode: string
    brand: string
    modelName: string
    issueYear: number
    oem: string
}

export const InquiryAddModel = {
    async getINQAdd(inqcode: string): Promise<InquiryAdd[]> {
        const result = await db<InquiryAdd>('Autoshop.dbo.VW_AS_getDataInquiryAdd')
            .where("inquiry_code", inqcode)
            .orderBy("id")
            .select("*");
        return result;
    }
}