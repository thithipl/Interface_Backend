export interface InquiryReq {
    id: number;
    inquiryCode: string;
    oemNo: string;
    description: string;
    model: string;
    qty: number;
    targetPrice: number;
    amount: number;
}
export declare const InquiryReqModel: {
    getINQReqByINQCode(inqcode: string): Promise<InquiryReq[]>;
};
//# sourceMappingURL=m_VW_inquiryReq.d.ts.map