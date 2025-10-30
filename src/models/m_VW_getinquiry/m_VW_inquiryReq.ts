import db from "../../db/index";

export interface InquiryReq {
    id: number;
    inquiryCode: string
    oemNo: string
    description: string
    model: string
    qty: number;
    targetPrice: number
    amount: number
}

export const InquiryReqModel = {
    async getINQReqByINQCode(inqcode: string): Promise<InquiryReq[]> {
        const result = await db<InquiryReq>('Autoshop.dbo.VW_AS_getDataInquiryReq')
            .where("inquiry_code", inqcode)
            .orderBy("id")
            .select("*");
        return result;
    }
} 