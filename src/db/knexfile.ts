import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
    client: "mssql",
    connection: {
        server: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        options: { encrypt: false, enableArithAbort: true }
    }
};

export default config;
