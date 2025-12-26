import db from "../../db/index";

export interface InquiryData {
    id: number;
    inquiry_code: string;
    company_contact_id: number;
    company_code: string;
    est_date: Date;
    port_id: number;
    port_name: string;
    country_id: number;
    country_code: string;
    fut40hq: number;
    fut40: number;
    fut20: number;
    fright_fut40hq: number;
    fright_fut40: number;
    fright_fut20: number;
    document_charge: number;
    insurance_charge: number;
    currency_code: string;
    payment: string;
    remark: string;
    status: string;
    is_active: boolean;
    PFM_No: string;
    FPI_Status: string;
    created_by: string;
    created_at: Date;
    updated_by: string;
    updated_at: Date;
    CustomerCode: string;
    CustomerName: string;
}

export const InquiryDataModel = {
    async getINQData(): Promise<InquiryData[]> {
        return db<InquiryData>('Autoshop.dbo.VW_AS_getDataInquiry')
            .select('*')
            .orderBy('created_at', 'desc');
    },
    async getINQDataByINQCode(inqcode: string): Promise<InquiryData[]> {
        const result = await db<InquiryData>('Autoshop.dbo.VW_AS_getDataInquiry')
            .where("inquiry_code", inqcode)
            .orderBy('created_at', 'desc')
            .select("*");
        return result;
    }
}

export const InquiryAllModel = {
    async getINQDataAll(): Promise<InquiryData[]> {
        return db<InquiryData>('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .select('*')
            .orderBy('created_at', 'desc');
    },
    async getINQDataByINQCode(inqcode: string): Promise<InquiryData[]> {
        return db<InquiryData>('Autoshop.dbo.VW_AS_getDataInquiryAll')
            .where("inquiry_code", inqcode)
            .select("*")
            .orderBy('created_at', 'desc');
    }
};