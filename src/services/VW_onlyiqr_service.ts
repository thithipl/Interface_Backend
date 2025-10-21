import type { OnlyInquiry } from "../models/m_VW_onlyinquiry";
import { OnlyInquiryModel } from "../models/m_VW_onlyinquiry";

export class OnlyIqrService {
    async getAll(): Promise<OnlyInquiry[]> {
        return OnlyInquiryModel.getINQAll();
    }
}