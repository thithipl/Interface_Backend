import db from "../../../db/index";
export interface JsonInvoice {
    InvoiceCode: string;
    proforma_code: string;
    id: number;
    created_at: Date;
    JSONOutput: string;
}

export const detailInvoice_json = {
    /**
    * 
    * @param invoiceCode 
    */

    async getInvoiceJson(invoiceCode?: string): Promise<JsonInvoice[]> {
        if (!invoiceCode) {
            return [];
        }
        let query = db<JsonInvoice>('Autoshop.dbo.vw_Invoice_JSON#2');

        const searchPattern = `%${invoiceCode}%`;
        query = query.where('InvoiceCode', 'LIKE', searchPattern);

        query = query.orderBy('created_at', 'desc').select('*');

        const result = await query;
        return result;
    }
};