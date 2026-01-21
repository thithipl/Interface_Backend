export interface SaleUser {
    user_name: string;
    password: string;
    IsActive?: number;
    emp_id?: string;
    name_thai?: string;
    name_eng?: string;
    departmentcode?: string;
    department?: string;
}
export declare class SaleUserModel {
    findByUsername(username: string): Promise<SaleUser | undefined>;
}
//# sourceMappingURL=m_sale_user.d.ts.map