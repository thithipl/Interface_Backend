import { Request, Response } from 'express';
import { ApiService } from '../../services/Product_Item/get_ProductItem_service';
import { GetProductItemModel } from '../../models/m_product_item/m_getProduct_Item';

const BATCH_SIZE = 3000;

export class GetProductItemController {
    static async syncGetProductItem(req: Request, res: Response) {

        const token = req.headers.authorization?.replace("Bearer ", "");

        const raw = req.query.code;
        let code: string = "";
        if (typeof raw === "string") {
            code = raw;
        } else if (Array.isArray(raw)) {
            const first = raw[0];
            code = typeof first === "string" ? first : "";
        }

        const start = Number(req.query.start || 0);
        const limit = Number(req.query.limit || 1000);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token is required in request body or query parameters.'
            });
        }

        try {
            const products = await ApiService.fetchProductsFromExternal(token, code, start, limit);

            if (!products || products.length === 0) {
                return res.status(404).json({ message: 'No data found from API' });
            }
            const totalRecords = products.length;
            console.log(`Fetched ${totalRecords} items.`);

            let recordsInserted = 0;

            for (let i = 0; i < totalRecords; i += BATCH_SIZE) {
                const batch = products.slice(i, i + BATCH_SIZE);

                const result = await GetProductItemModel.UpsertData(batch);

                if (Array.isArray(result.rowsAffected)) {
                    recordsInserted += result.rowsAffected.reduce((acc, cur) => acc + cur, 0);
                } else {
                    recordsInserted += result.rowsAffected;
                }
            }
            return res.status(200).json({
                success: true,
                message: `Successfully imported ${products.length} items into Database.`,
                totalFetched: totalRecords,
                totalInserted: recordsInserted
            });
        } catch (error: any) {
            console.error('Error during synchronization:', error);
            const errorMessage = error instanceof Error ? error.message : 'An unknown database error occurred.';
            return res.status(500).json({
                success: false,
                message: `Synchronization failed: ${errorMessage}`
            });
        }
    }
}