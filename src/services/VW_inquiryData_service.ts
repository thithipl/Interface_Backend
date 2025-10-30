import type { InquiryData } from "../models/m_VW_getinquiry/m_VW_inquiryData";
import { InquiryDataModel, InquiryAllModel } from "../models/m_VW_getinquiry/m_VW_inquiryData";

export class InquiryDataService {
    async getAll(): Promise<InquiryData[]> {
        return InquiryDataModel.getINQData();
    }

    async getByINQCode(inqcode: string): Promise<InquiryData[]> {
        return InquiryDataModel.getINQDataByINQCode(inqcode);
    }
}

export class InquiryAllService {
    async getAll(): Promise<InquiryData[]> {
        return InquiryAllModel.getINQDataAll();
    }

    async getByINQCode(inqcode: string): Promise<InquiryData[]> {
        return InquiryAllModel.getINQDataByINQCode(inqcode);
    }
}