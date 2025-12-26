"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=m_invoive_Items.js.map