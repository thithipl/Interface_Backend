import { Router } from 'express';
import { GetProductItemController } from '../../controller/Product_Item/get_ProductItem_controller';

const router = Router();
/**
 * @route POST /api/sync-products
 * @description Endpoint สำหรับดึงข้อมูลสินค้าทั้งหมดจาก API ภายนอก 
 * และทำการ Bulk Insert ลงใน SQL Server
 * Token ต้องถูกส่งมาใน Request Body หรือ Query Parameter
 */
router.post('/item', GetProductItemController.syncGetProductItem);

export default router;