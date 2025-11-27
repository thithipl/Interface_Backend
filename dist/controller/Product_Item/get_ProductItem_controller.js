"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductItemController = void 0;
const get_ProductItem_service_1 = require("../../services/Product_Item/get_ProductItem_service");
const m_getProduct_Item_1 = require("../../models/m_product_item/m_getProduct_Item");
const BATCH_SIZE = 1000;
class GetProductItemController {
    static async syncGetProductItem(req, res) {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const start = Number(req.query.start || 0);
        const limit = Number(req.query.limit || 1000);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token is required in request body or query parameters.'
            });
        }
        try {
            const products = await get_ProductItem_service_1.ApiService.fetchProductsFromExternal(token, start, limit);
            if (!products || products.length === 0) {
                return res.status(404).json({ message: 'No data found from API' });
            }
            const totalRecords = products.length;
            console.log(`Fetched ${totalRecords} items.`);
            let recordsInserted = 0;
            for (let i = 0; i < totalRecords; i += BATCH_SIZE) {
                const batch = products.slice(i, i + BATCH_SIZE);
                const result = await m_getProduct_Item_1.GetProductItemModel.InsertData(batch);
                recordsInserted += result.rowsAffected;
                console.log(`✅ Processed Batch ${Math.ceil((i + 1) / BATCH_SIZE)}: Inserted ${result.rowsAffected} records.`);
            }
            // 4. ส่ง Response กลับ
            return res.status(200).json({
                success: true,
                message: `Successfully imported ${products.length} items into Database.`
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}
exports.GetProductItemController = GetProductItemController;
//# sourceMappingURL=get_ProductItem_controller.js.map