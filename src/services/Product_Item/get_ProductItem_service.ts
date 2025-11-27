import axios from 'axios';
import { ProductItem } from '../../models/m_product_item/m_getProduct_Item';

export class ApiService {
    static async fetchProductsFromExternal(
        token: string,
        start: number,
        limit: number
    ): Promise<ProductItem[]> {
        const url = `https://www.fortuneparts.net/api/product/item?code=all&start=${start}&limit=${limit}`;

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        try {
            const response = await axios.get(url, { headers: headers });
            const productData = response.data.data;

            // ตรวจสอบความถูกต้องอีกครั้งก่อนส่งออกไป
            if (!Array.isArray(productData)) {
                // ถ้าไม่ใช่ Array ให้โยน Error ที่ชัดเจนขึ้น
                throw new TypeError('Failed to fetch data from external API. Check token or network.');
            }
            return productData as ProductItem[];
        } catch (error) {
            console.error('Error fetching from API:', error);
            throw new Error('Failed to fetch data from external API. Check token or network.');
        }
    }
}