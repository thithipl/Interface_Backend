import db from "../../../db/index";
export interface OnlyInvoice {
    InvoiceCode: string;
    proforma_code: string;
    id: number;
    created_at: Date;
}

export const emptyInvoice = {
    /**
     * 
     * @param invoiceCode 
     */
    async getOnlyInvoice(invoiceCode?: string): Promise<OnlyInvoice[]> {
        let query = db<OnlyInvoice>('Autoshop.dbo.vw_OnlyInvoice_JSON#2');
        if (invoiceCode) {
            const searchPattern = `%${invoiceCode}%`;
            query = query.where('InvoiceCode', 'LIKE', searchPattern);
        }

        if (!invoiceCode) {
            query = query
                .limit(100)
        }

        query = query.orderBy('created_at', 'desc').select('*');


        const result = await query;
        return result;
    },
};