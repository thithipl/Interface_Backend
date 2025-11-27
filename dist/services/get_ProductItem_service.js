"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiService {
    static async fetchProductsFromExternal(token) {
        const url = 'https://www.fortuneparts.net/api/product/item?code=all';
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        try {
            const response = await axios_1.default.get(url, { headers: headers });
            const productData = response.data.data;
            // ตรวจสอบความถูกต้องอีกครั้งก่อนส่งออกไป
            if (!Array.isArray(productData)) {
                // ถ้าไม่ใช่ Array ให้โยน Error ที่ชัดเจนขึ้น
                throw new TypeError('Failed to fetch data from external API. Check token or network.');
            }
            return productData;
        }
        catch (error) {
            console.error('Error fetching from API:', error);
            throw new Error('Failed to fetch data from external API. Check token or network.');
        }
    }
}
exports.ApiService = ApiService;
//# sourceMappingURL=get_ProductItem_service.js.map