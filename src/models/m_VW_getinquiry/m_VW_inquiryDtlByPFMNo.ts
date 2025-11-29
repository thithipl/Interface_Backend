import db from "../../db/index";

export interface InquiryDtlByPFMNo {
    row_num: number;
    PFM_No: string;
    inquiry_code: string;
}

export const DTLInquiryByPFMNoModel = {
    async getDataDTLInquiry(pfmcode: string): Promise<InquiryDtlByPFMNo[]> {
        const result = await db<InquiryDtlByPFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .where("PFM_No", pfmcode)
            .select("*");
        return result;
    },

    async getPFMCode(): Promise<InquiryDtlByPFMNo[]> {
        return db<InquiryDtlByPFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .orderBy("PFM_No", "desc")
            .select('PFM_No');
    },
}