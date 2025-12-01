"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductItemModel = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlconfig_db_1 = require("../../db/sqlconfig_db");
class GetProductItemModel {
    static async UpsertData(prod) {
        let pool;
        let transaction;
        const tempTableName = `##TempProductItem_${Date.now()}`;
        try {
            if (!Array.isArray(prod) || prod.length === 0) {
                console.warn('Attempted to bulk insert with empty or invalid data array.');
                return { rowsAffected: 0 };
            }
            pool = await mssql_1.default.connect(sqlconfig_db_1.dbConfig);
            transaction = new mssql_1.default.Transaction(pool);
            await transaction.begin();
            const request = new mssql_1.default.Request(transaction);
            console.log(`1. Creating temporary table and bulk inserting ${prod.length} records.`);
            await request.query(`
                SELECT TOP 0 * INTO ${tempTableName} 
                FROM [Autoshop].[dbo].[AU_get_Product_item] 
                WHERE 1 = 0;
            `);
            const table = new mssql_1.default.Table(tempTableName);
            table.create = false;
            table.columns.add('sub_category_code', mssql_1.default.VarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('sub_category_name', mssql_1.default.VarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('product_code', mssql_1.default.VarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('fpi_code', mssql_1.default.VarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('product_name', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('patterndesciption', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('specifiaction', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('oem', mssql_1.default.VarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('m3', mssql_1.default.Decimal(18, 4), { nullable: true });
            table.columns.add('nw', mssql_1.default.Decimal(18, 4), { nullable: true });
            table.columns.add('gw', mssql_1.default.Decimal(18, 4), { nullable: true });
            for (const p of prod) {
                table.rows.add(p.sub_category_code, p.sub_category_name, p.product_code, p.fpi_code, p.product_name, p.patterndesciption, p.specifiaction, p.oem, Number(p.m3) || 0, Number(p.nw) || 0, Number(p.gw) || 0);
            }
            await request.bulk(table);
            console.log('2. Bulk Insert into temporary table successful.');
            const targetTable = '[Autoshop].[dbo].[AU_get_Product_item]';
            const mergeQuery = `
                MERGE ${targetTable} AS Target
                USING ${tempTableName} AS Source
                ON (Target.product_code = Source.product_code)
                WHEN MATCHED THEN
                    UPDATE SET
                        Target.sub_category_name = Source.sub_category_name,
                        Target.product_name = Source.product_name,
                        Target.patterndesciption = Source.patterndesciption,
                        Target.specifiaction = Source.specifiaction,
                        Target.oem = Source.oem,
                        Target.m3 = Source.m3,
                        Target.nw = Source.nw,
                        Target.gw = Source.gw
                
                WHEN NOT MATCHED THEN
                    INSERT (
                        sub_category_code, sub_category_name, product_code, fpi_code, 
                        product_name, patterndesciption, specifiaction, oem, m3, nw, gw
                    )
                    VALUES (
                        Source.sub_category_code, Source.sub_category_name, Source.product_code, Source.fpi_code, 
                        Source.product_name, Source.patterndesciption, Source.specifiaction, Source.oem, Source.m3, Source.nw, Source.gw
                    )
                
                OUTPUT $action;
                ;
            `;
            const mergeResult = await request.query(mergeQuery);
            console.log(`3. MERGE complete. Total rows affected: ${mergeResult.rowsAffected}`);
            await transaction.commit();
            return mergeResult;
        }
        catch (error) {
            console.error('Error during Upsert operation:', error);
            if (transaction?.begin) {
                await transaction.rollback();
                console.log('Transaction rolled back.');
            }
            throw new Error(`Database operation failed: ${error instanceof Error ? error.message : String(error)}`);
        }
        finally {
            if (pool) {
                try {
                    const dropQuery = `
                IF OBJECT_ID('${tempTableName}', 'U') IS NOT NULL
                BEGIN
                    DROP TABLE ${tempTableName};
                END
            `;
                    await pool.request().query(dropQuery);
                    console.log(`Temporary table ${tempTableName} dropped.`);
                }
                catch (dropError) {
                    console.error('Error dropping temp table:', dropError);
                }
                await pool.close();
                console.log('Database connection closed.');
            }
        }
    }
}
exports.GetProductItemModel = GetProductItemModel;
//# sourceMappingURL=m_getProduct_Item.js.map