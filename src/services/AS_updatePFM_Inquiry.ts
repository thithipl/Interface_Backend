import type { UpdatePFMResult } from "../models/m_VW_getinquiry/m_AS_updateDataPFM_Inquiry";
import { InquiryModel } from "../models/m_VW_getinquiry/m_AS_updateDataPFM_Inquiry";

export class InquiryService {
    async updatePFM(
        pfmNo: string,
        inquiryCode: string,
        custCode: string,
    ): Promise<UpdatePFMResult> {
        return InquiryModel.updateDataPFM_Inquiry(pfmNo, inquiryCode, custCode);
    }
}