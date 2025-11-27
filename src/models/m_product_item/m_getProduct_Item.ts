import sql from 'mssql';
import { dbConfig } from '../../db/sqlconfig_db';

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

export class GetProductItemModel {
    static async InsertData(prod: ProductItem[]) {
        let pool: sql.ConnectionPool | undefined;

        try {
            if (!Array.isArray(prod) || prod.length === 0) {
                console.warn('Attempted to bulk insert with empty or invalid data array.');
                return { rowsAffected: 0 };
            }

            pool = await sql.connect(dbConfig);
            console.log(`Successfully connected and preparing to insert ${prod.length} records.`);

            const table = new sql.Table('[Autoshop].[dbo].[AU_get_Product_item]');
            table.create = false;

            table.columns.add('sub_category_code', sql.VarChar(50), { nullable: true });
            table.columns.add('sub_category_name', sql.VarChar(255), { nullable: true });
            table.columns.add('product_code', sql.VarChar(50), { nullable: true });
            table.columns.add('fpi_code', sql.VarChar(50), { nullable: true });
            table.columns.add('product_name', sql.NVarChar(sql.MAX), { nullable: true });
            table.columns.add('patterndesciption', sql.NVarChar(sql.MAX), { nullable: true });
            table.columns.add('specifiaction', sql.NVarChar(sql.MAX), { nullable: true });
            table.columns.add('oem', sql.VarChar(255), { nullable: true });
            table.columns.add('m3', sql.Decimal(18, 4), { nullable: true });
            table.columns.add('nw', sql.Decimal(18, 4), { nullable: true });
            table.columns.add('gw', sql.Decimal(18, 4), { nullable: true });

            for (const p of prod) {
                table.rows.add(
                    p.sub_category_code,
                    p.sub_category_name,
                    p.product_code,
                    p.fpi_code,
                    p.product_name,
                    p.patterndesciption,
                    p.specifiaction,
                    p.oem,
                    Number(p.m3) || 0,
                    Number(p.nw) || 0,
                    Number(p.gw) || 0
                );
            }

            const request = new sql.Request(pool);
            const result = await request.bulk(table);

            console.log(`Bulk Insert success. Rows affected: ${result.rowsAffected}`);
            return result;

        } catch (error) {
            console.error('Error during Bulk Insert:', error);
            throw new Error(`Database operation failed: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            if (pool) {
                await pool.close();
                console.log('Database connection closed.');
            }
        }
    }
}