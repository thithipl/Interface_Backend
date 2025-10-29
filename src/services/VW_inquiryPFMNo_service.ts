import type { InquiryCodePFMNo } from "../models/m_VW_inquiryPFMNo";
import { InquiryCodePFMNoModel, LoadInquiryPFMNoModel } from "../models/m_VW_inquiryPFMNo";

export class InquiryCodePFMNoService {
    async getAll(): Promise<InquiryCodePFMNo[]> {
        return InquiryCodePFMNoModel.getAll();
    }

    async getByPFMNo(pfmNo: string): Promise<InquiryCodePFMNo[]> {
        return InquiryCodePFMNoModel.getByPFMNo(pfmNo);
    }

    async getLoadInquiryPFMNo(): Promise<InquiryCodePFMNo[]> {
        return LoadInquiryPFMNoModel.getAllInquiryPFMNo();
    }
};
