import db from "../db/index";
export interface InquiryCodePFMNo {
    id: number;
    inquiry_code: string;
    company_contact_id: number | null;
    company_code: string | null;
    est_date: Date | null;
    port_id: number | null;
    port_name: string | null;
    country_id: number | null;
    country_code: string | null;
    fut40hq: number | null;
    fut40: number | null;
    fut20: number | null;
    fright_fut40hq: number | null;
    fright_fut40: number | null;
    fright_fut20: number | null;
    document_charge: number | null;
    insurance_charge: number | null;
    currency_code: string | null;
    payment: string | null;
    remark: string | null;
    status: string | null;
    is_active: boolean;
    PFM_No: string | null;
    FPI_Status: string | null;
    created_by: Date | null;
    created_at: Date | null;
    updated_by: Date | null;
    updated_at: Date | null;
    CustomerCode: string | null;
    CustomerName: string | null;
}

export const InquiryCodePFMNoModel = {
    async getAll(): Promise<InquiryCodePFMNo[]> {
        return db<InquiryCodePFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .orderBy('id', 'desc')
            .select('*');
    },

    async getByPFMNo(pfmNo: string): Promise<InquiryCodePFMNo[]> {
        const result = await db<InquiryCodePFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .where("PFM_No", pfmNo)
            .select("*");
        return result;
    }
}

export const LoadInquiryPFMNoModel = {
    async getAllInquiryPFMNo(): Promise<InquiryCodePFMNo[]> {
        return db<InquiryCodePFMNo>('Autoshop.dbo.VW_AS_getDataInquiryCodePFMNo')
            .orderBy('id', 'desc')
            .select('*');
    },
}