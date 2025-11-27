import type { InquiryData } from "../../models/m_VW_getinquiry/m_VW_inquiryData";
export declare class InquiryDataService {
    getAll(): Promise<InquiryData[]>;
    getByINQCode(inqcode: string): Promise<InquiryData[]>;
}
export declare class InquiryAllService {
    getAll(): Promise<InquiryData[]>;
    getByINQCode(inqcode: string): Promise<InquiryData[]>;
}
//# sourceMappingURL=VW_inquiryData_service.d.ts.map