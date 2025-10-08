import db from "../db/index";

export interface InquiryCodePFMNo {
    row_num: number;
    PFM_No: string;
    inquiry_code: string;
}

export const InquiryCodePFMNoModel = {
    async getAll(): Promise<InquiryCodePFMNo[]> {
        return db<InquiryCodePFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .select('*');
    },

    async getByPFMNo(pfmNo: string): Promise<InquiryCodePFMNo[]> {
        const result = await db<InquiryCodePFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .where("PFM_No", pfmNo)
            .select("*");
        return result;
    }
}