import type { InquiryDtlByPFMNo } from "../models/m_VW_getinquiry/m_VW_inquiryDtlByPFMNo";
import { DTLInquiryByPFMNoModel } from "../models/m_VW_getinquiry/m_VW_inquiryDtlByPFMNo";

export class InquiryDtlByPFMNoService {
    async getDataDTLInquiry(pfmcode: string): Promise<InquiryDtlByPFMNo[]> {
        return await DTLInquiryByPFMNoModel.getDataDTLInquiry(pfmcode);
    }
}