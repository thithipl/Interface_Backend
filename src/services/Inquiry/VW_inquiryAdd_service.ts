import type { InquiryAdd } from "../../models/m_VW_getinquiry/m_VW_inquiryAdd";
import { InquiryAddModel } from "../../models/m_VW_getinquiry/m_VW_inquiryAdd";

export class InquiryAddService {
    async getINQAdd(inqcode: string): Promise<InquiryAdd[]> {
        return await InquiryAddModel.getINQAdd(inqcode);
    }
}