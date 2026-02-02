import db from "../../db/index";

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

export class SaleUserModel {
    async findByUsername(username: string): Promise<SaleUser | undefined> {
        return await db<SaleUser>('Fortune1.dbo.menuuser')
            .select(
                'user_name',
                'password',
                'IsActive',
                'emp_id',
                'name_thai',
                'name_eng',
                'departmentcode',
                'department'
            )
            .where('user_name', username)
            .andWhere('IsActive', 1)
            .andWhere(builder => {
                builder.whereRaw("LTRIM(RTRIM(emp_id)) LIKE ?", ['%SAL%'])
                    .orWhere('user_name', 'THITHANAWAT')
                    .orWhere('user_name', 'SOMPOL');
            })
            .first();
    }
}