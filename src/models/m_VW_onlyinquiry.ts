import db from "../db/index";

export interface OnlyInquiry {
    id: number;
    inquiry_code: string;
    pfm_no: string;
}

export const OnlyInquiryModel = {
    async getINQAll(): Promise<OnlyInquiry[]> {
        const rows = await db('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .select(
                'id',
                'inquiry_code',
                'PFM_No'
            )
            .orderBy('inquiry_code', 'desc');
        return rows;
    },
};