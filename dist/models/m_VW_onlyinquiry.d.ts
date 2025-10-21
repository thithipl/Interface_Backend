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
export declare const OnlyInquiryModel: {
    getINQAll(): Promise<OnlyInquiry[]>;
};
//# sourceMappingURL=m_VW_onlyinquiry.d.ts.map