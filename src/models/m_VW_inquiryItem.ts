import db from "../db/index";

export interface InquiryItem {
    id: number;
    inquiry_code: string;
    productCode: string;
    productName: string;
    OEM: string;
    unitPrice: number;
    quantities: number;
    subtotal: number;
}

export const InquiryItemModel = {
    async getINQItemDataByINQCode(inqcode: string): Promise<InquiryItem[]> {
        const result = await db<InquiryItem>('Autoshop.dbo.VW_AS_getDataInquiryItems')
            .where("inquiry_code", inqcode)
            .select("*");
        return result;
    }
}