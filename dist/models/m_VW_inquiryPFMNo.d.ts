export interface InquiryCodePFMNo {
    row_num: number;
    PFM_No: string;
    inquiry_code: string;
}
export declare const InquiryCodePFMNoModel: {
    getAll(): Promise<InquiryCodePFMNo[]>;
    getByPFMNo(pfmNo: string): Promise<InquiryCodePFMNo[]>;
};
//# sourceMappingURL=m_VW_inquiryPFMNo.d.ts.map