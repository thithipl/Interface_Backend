import sql, { pool } from 'mssql';
import dotenv, { config } from 'dotenv';

dotenv.config();

export const dbConfig: sql.config = {
    server: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    options: { encrypt: false, enableArithAbort: true },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};