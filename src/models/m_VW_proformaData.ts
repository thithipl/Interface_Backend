import db from "../db/index";

export interface ProformaData {
    proforma_Code: string | null;
    inquity_code: string | null;
    Messrs: string | null;
    agent_code: string | null;
    consignee_id: string | null;
    InvoiceOf: string | null;
    Sailing_to: string | null;
    billingAddress: string | null;
    ship_to_port_name: string | null;
    payment: string | null;
    ourbank: string | null;
    est_date: Date | null;
    discount_persent: number | null;
    discount: number | null;
    fright_fut40hq: number | null;
    fright_fut40: number | null;
    fright_fut20: number | null;
    document_charge: number | null;
    insurance_charge: number | null;
    grand_total: number | null;
    currency_code: string | null;
    payment_desc: string | null;
    our_bank_desc: string | null;
    remark: string | null;
    Mark_Nos: string | null;
    ItemOrder: number | null;
    ItemCode: string | null;
    product_code: string | null;
    ItemName: string | null;
    OEMNo: string | null;
    Model: string | null;
    Year: number | null;
    flag: string | null;
    qty: number | null;
    unit: string | null;
    UCurrency: string | null;
    unit_price: number | null;
    ACurrency: string | null;
    Amount: number | null;
    stock: number | null;
    Cum: number | null;
    pack_ctn: number | null;
    ctn_total: number | null;
    m3: number | null;
    m3_total: number | null;
    nw: number | null;
    gw: number | null;
    cust_ref: string | null;
}

export const ProformaDataModel = {
    async getAll(): Promise<ProformaData[]> {
        return db<ProformaData>('Autoshop.dbo.VW_AS_getProforma')
            .select('*');
    },

    async getByPFMNo(pfmNo: string): Promise<ProformaData[]> {
        const result = await db<ProformaData>('Autoshop.dbo.VW_AS_getProforma')
            .where("proforma_Code", pfmNo)
            .orderBy("ItemOrder", "asc")
            .select("*");

        // const decimalFields = [
        //     "m3_total",
        // ];

        // const cleaned = result.map(row => {
        //     const updated: any = { ...row };

        //     for (const field of decimalFields) {
        //         if (updated[field] !== null && updated[field] !== undefined) {
        //             const num = Number(updated[field]);
        //             updated[field] = Number(num.toFixed(4));
        //         }
        //     }
        //     return updated as ProformaData;
        // });
        return result;
    }
};