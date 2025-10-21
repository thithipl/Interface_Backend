import db from "../db/index";

export interface OnlyInquiry {
    id: number;
    inquiry_code: string;
    company_contact_id: number;
    company_code: string;
    CustomerCode: string;
    est_date: Date;
    created_by: string;
    is_active: boolean;
    created_at: Date;
    updated_by: string;
    updated_at: Date;
}

export const OnlyInquiryModel = {
    async getINQAll(): Promise<OnlyInquiry[]> {
        const rows = await db('Autoshop.dbo.VW_AS_getDataInquiry')
            .select(
                'id',
                'inquiry_code',
                'company_contact_id',
                'company_code',
                'CustomerCode',
                'est_date',
                'created_by',
                'is_active',
                'created_at',
                'updated_by',
                'updated_at'
            )
            .orderBy('inquiry_code', 'desc');
        return rows;
    },
};