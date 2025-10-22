import db from "../db/index";

export interface OnlyInquiry {
    id: number;
    inquiry_code: string;
}

export const OnlyInquiryModel = {
    async getINQAll(): Promise<OnlyInquiry[]> {
        const rows = await db('Autoshop.dbo.VW_AS_getDataInquiry')
            .select(
                'id',
                'inquiry_code',
            )
            .orderBy('inquiry_code', 'desc');
        return rows;
    },
};