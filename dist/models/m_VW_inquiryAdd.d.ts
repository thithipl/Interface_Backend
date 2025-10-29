export interface InquiryAdd {
    id: number;
    inquiryCode: string;
    productCode: string;
    code: string;
    ourCode: string;
    brand: string;
    modelName: string;
    issueYear: number;
    oem: string;
}
export declare const InquiryAddModel: {
    getINQAdd(inqcode: string): Promise<InquiryAdd[]>;
};
//# sourceMappingURL=m_VW_inquiryAdd.d.ts.map