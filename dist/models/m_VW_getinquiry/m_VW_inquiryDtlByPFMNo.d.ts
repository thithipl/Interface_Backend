export interface InquiryDtlByPFMNo {
    row_num: number;
    PFM_No: string;
    inquiry_code: string;
}
export declare const DTLInquiryByPFMNoModel: {
    getDataDTLInquiry(pfmcode: string): Promise<InquiryDtlByPFMNo[]>;
    getPFMCode(): Promise<InquiryDtlByPFMNo[]>;
};
//# sourceMappingURL=m_VW_inquiryDtlByPFMNo.d.ts.map