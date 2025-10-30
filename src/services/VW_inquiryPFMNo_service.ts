import type { DataInquiryCodePFMNo } from "../models/m_VW_inquiryPFMNo";
import { LoadDataInquiryPFMNoModel } from "../models/m_VW_inquiryPFMNo";

export class InquiryCodePFMNoService {
    async LoadInquiryPFMNo(): Promise<DataInquiryCodePFMNo[]> {
        return LoadDataInquiryPFMNoModel.getDataAllInquiryPFMNo();
    }
};
