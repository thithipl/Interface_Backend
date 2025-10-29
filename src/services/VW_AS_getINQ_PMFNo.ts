import type { InquiryDataPFMNo, InquiryCodePFMNO } from "../models/m_VW_AS_getINQ_PMFNo";
import { INQ_ProformaNoModel, INQ_ProformaCodeModel } from "../models/m_VW_AS_getINQ_PMFNo";

export class INQPFMNoService {
    async getDataInquiryPFMNo(): Promise<InquiryDataPFMNo[]> {
        return INQ_ProformaNoModel.getDataInquiryPFMNo();
    }

    async getDataInquiryCodePFMNO(pfmNo: string): Promise<InquiryCodePFMNO[]> {
        return INQ_ProformaCodeModel.getDataInquiryCodePFMNO(pfmNo);
    }
}