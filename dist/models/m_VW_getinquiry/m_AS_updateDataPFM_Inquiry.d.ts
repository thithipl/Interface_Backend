export interface UpdatePFMResult {
    success: boolean;
    status: "Success" | "Error";
    message: string;
}
export declare const InquiryModel: {
    updateDataPFM_Inquiry(pfmNo: string, inquiryCode: string, custCode: string | null): Promise<UpdatePFMResult>;
};
//# sourceMappingURL=m_AS_updateDataPFM_Inquiry.d.ts.map