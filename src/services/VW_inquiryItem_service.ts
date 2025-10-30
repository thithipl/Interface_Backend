import type { InquiryItem } from "../models/m_VW_getinquiry/m_VW_inquiryItem
import { InquiryItemModel } from "../models/m_VW_getinquiry/m_VW_inquiryItem";

export class InquiryItemService {
    async getByINQCode(inqcode: string): Promise<InquiryItem[]> {
        return InquiryItemModel.getINQItemDataByINQCode(inqcode);
    }
}