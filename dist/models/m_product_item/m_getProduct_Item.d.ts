export interface ProductItem {
    sub_category_code: string;
    sub_category_name: string;
    product_code: string;
    fpi_code: string;
    product_name: string;
    patterndesciption: string;
    specifiaction: string;
    oem: string;
    m3: number;
    nw: number;
    gw: number;
}
export declare class GetProductItemModel {
    static InsertData(prod: ProductItem[]): Promise<{
        rowsAffected: number;
    }>;
}
//# sourceMappingURL=m_getProduct_Item.d.ts.map