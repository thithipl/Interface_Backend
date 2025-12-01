"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_ProductItem_controller_1 = require("../../controller/Product_Item/get_ProductItem_controller");
const router = (0, express_1.Router)();
/**
 * @route POST /api/sync-products
 * @description Endpoint สำหรับดึงข้อมูลสินค้าทั้งหมดจาก API ภายนอก
 * และทำการ Bulk Insert ลงใน SQL Server
 * Token ต้องถูกส่งมาใน Request Body หรือ Query Parameter
 */
router.post('/item', get_ProductItem_controller_1.GetProductItemController.syncGetProductItem);
exports.default = router;
//# sourceMappingURL=get_ProductItem_routes.js.map