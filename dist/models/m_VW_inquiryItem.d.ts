export interface InquiryItem {
    id: number;
    inquiry_code: string;
    productCode: string;
    productName: string;
    OEM: string;
    unitPrice: number;
    quantities: number;
    subtotal: number;
}
export declare const InquiryItemModel: {
    getINQItemDataByINQCode(inqcode: string): Promise<InquiryItem[]>;
};
//# sourceMappingURL=m_VW_inquiryItem.d.ts.map