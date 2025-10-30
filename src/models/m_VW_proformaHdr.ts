import db from "../db/index";

export interface ProformaHdr {
    proforma_Code: string | null;
    inquiry_code: string | null;
    Messrs: string | null;
    agent_code: string | null;
    consignee_id: string | null;
    Invoice_of: string | null;
    Sailling_to: string | null;
    billing_address: string | null;
    ship_to_port_name: string | null;
    payment: string | null;
    ourbank: string | null;
    est_date: Date | null;
    discount_persent: number | null;
    discount: number | null;
    fut40hq: number | null;
    fut40: number | null;
    fut20: number | null;
    fright_fut40hq: number | null;
    fright_fut40: number | null;
    fright_fut20: number | null;
    document_charge: number | null;
    insurance_charge: number | null;
    grand_total: number | null;
    price_term: string | null;
    currency_code: string | null;
    payment_desc: string | null;
    our_bank_desc: string | null;
    remark: string | null;
}

export const ProformaHdrModel = {
    async getProformaHdr(pfm_Code: string): Promise<ProformaHdr[]> {
        const result = await db<ProformaHdr>('Autoshop.dbo.VW_AS_getProformaHdr')
            .where('proforma_Code', pfm_Code)
            .select('*');
        return result;
    }
}