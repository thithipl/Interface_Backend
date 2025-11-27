"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductItemModel = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlconfig_db_1 = require("../../db/sqlconfig_db");
class GetProductItemModel {
    static async InsertData(prod) {
        let pool;
        try {
            if (!Array.isArray(prod) || prod.length === 0) {
                console.warn('Attempted to bulk insert with empty or invalid data array.');
                return { rowsAffected: 0 };
            }
            pool = await mssql_1.default.connect(sqlconfig_db_1.dbConfig);
            console.log(`Successfully connected and preparing to insert ${prod.length} records.`);
            const table = new mssql_1.default.Table('[Autoshop].[dbo].[AU_get_Product_item]');
            table.create = false;
            table.columns.add('sub_category_code', mssql_1.default.VarChar(50), { nullable: true });
            table.columns.add('sub_category_name', mssql_1.default.VarChar(255), { nullable: true });
            table.columns.add('product_code', mssql_1.default.VarChar(50), { nullable: true });
            table.columns.add('fpi_code', mssql_1.default.VarChar(50), { nullable: true });
            table.columns.add('product_name', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('patterndesciption', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('specifiaction', mssql_1.default.NVarChar(mssql_1.default.MAX), { nullable: true });
            table.columns.add('oem', mssql_1.default.VarChar(255), { nullable: true });
            table.columns.add('m3', mssql_1.default.Decimal(18, 4), { nullable: true });
            table.columns.add('nw', mssql_1.default.Decimal(18, 4), { nullable: true });
            table.columns.add('gw', mssql_1.default.Decimal(18, 4), { nullable: true });
            for (const p of prod) {
                table.rows.add(p.sub_category_code, p.sub_category_name, p.product_code, p.fpi_code, p.product_name, p.patterndesciption, p.specifiaction, p.oem, Number(p.m3) || 0, Number(p.nw) || 0, Number(p.gw) || 0);
            }
            const request = new mssql_1.default.Request(pool);
            const result = await request.bulk(table);
            console.log(`Bulk Insert success. Rows affected: ${result.rowsAffected}`);
            return result;
        }
        catch (error) {
            console.error('Error during Bulk Insert:', error);
            throw new Error(`Database operation failed: ${error instanceof Error ? error.message : String(error)}`);
        }
        finally {
            if (pool) {
                await pool.close();
                console.log('Database connection closed.');
            }
        }
    }
}
exports.GetProductItemModel = GetProductItemModel;
//# sourceMappingURL=m_getProduct_Item.js.map