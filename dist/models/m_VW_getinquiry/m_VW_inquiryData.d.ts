export interface InquiryData {
    id: number;
    inquiry_code: string;
    company_contact_id: number;
    company_code: string;
    est_date: Date;
    port_id: number;
    port_name: string;
    country_id: number;
    country_code: string;
    fut40hq: number;
    fut40: number;
    fut20: number;
    fright_fut40hq: number;
    fright_fut40: number;
    fright_fut20: number;
    document_charge: number;
    insurance_charge: number;
    currency_code: string;
    payment: string;
    remark: string;
    status: string;
    is_active: boolean;
    PFM_No: string;
    FPI_Status: string;
    created_by: string;
    created_at: Date;
    updated_by: string;
    updated_at: Date;
    CustomerCode: string;
    CustomerName: string;
}
export declare const InquiryDataModel: {
    getINQData(): Promise<InquiryData[]>;
    getINQDataByINQCode(inqcode: string): Promise<InquiryData[]>;
};
export declare const InquiryAllModel: {
    getINQDataAll(): Promise<InquiryData[]>;
    getINQDataByINQCode(inqcode: string): Promise<InquiryData[]>;
};
//# sourceMappingURL=m_VW_inquiryData.d.ts.map