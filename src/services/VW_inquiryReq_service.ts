import type { InquiryReq } from "../models/m_VW_inquiryReq";
import { InquiryReqModel } from "../models/m_VW_inquiryReq";

export class InquiryReqService {
    async getINQReqByINQCode(inqcode: string): Promise<InquiryReq[]> {
        return await InquiryReqModel.getINQReqByINQCode(inqcode);
    }
}
