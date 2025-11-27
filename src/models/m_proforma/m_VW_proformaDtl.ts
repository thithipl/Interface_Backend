import db from "../../db/index";

export interface ProformaDtl {
    Proforma_Code: string | null;
    ItemOrder: number | null;
    product_code: string | null;
    unit_price: number | null;
    qty: number | null;
    unit: string | null;
    Amount: number | null;
    Currency: string | null;
    pack_ctn: number | null;
    ctn_total: number | null;
    M3: number | null;
    m3_total: number | null;
    NW: number | null;
    GW: number | null;
    cust_ref: string | null;
    stock: string | null;
    flag: string | null;
    remark_customer: string | null;
    remark_sales: string | null;
    urgent: boolean | null;
    status: string | null;
}

export const ProformaDtlModel = {
    async getProformaDtl(pfm_Code: string): Promise<ProformaDtl[]> {
        const result = await db<ProformaDtl>('Autoshop.dbo.VW_AS_getProformaDtl')
            .where('proforma_Code', pfm_Code)
            .select('*');
        return result;
    }
}