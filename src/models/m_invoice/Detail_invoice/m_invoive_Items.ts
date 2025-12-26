export interface InvoiceItemsModel {
    proforma_code: string | null;
    product_code: string | null;
    unit_price: number | null;
    qty: number | null;
    unit: number | null;
    amount: number | null;
    pack_ctn: number | null;
    ctn_total: number | null;
    m3: number | null;
    m3_total: number | null;
    nw: number | null;
    gw: number | null;
    remark_customer: string | null;
    remark_sales: string | null;
    OurCode: string | null;
    Description: string | null;
}


// export const InvoiceItems_Dtl = {
//     /**
//      *
//      * @param proformacode
//      *
//      */
//     async getInvoiceItems_Dtl(proformacode?: string): Promise<InvoiceItemsModel[]> {
//         if (!proformacode) {
//             return [];
//         }
//         let query = db<InvoiceItemsModel>('Autoshop.dbo.VW_AS_Invoice_mst');

//         const searchPattern = `%${proformacode}%`;

//         query = query.where('proforma_code', 'LIKE', searchPattern)
//             .select('proforma_code', 'product_code', 'unit_price', 'qty', 'unit', 'amount', 'pack_ctn', 'ctn_total', 'm3', 'm3_total', 'nw', 'gw', 'remark_customer', 'remark_sales')

//         const result = await query;
//         return result;
//     }
// };