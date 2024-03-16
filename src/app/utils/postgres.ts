import { Pool, QueryResult } from 'pg';

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

interface DBQuery {
    query: (text: string, params?: any[]) => Promise<QueryResult<any>>;
}

const db: DBQuery = {
    query: (text, params) => pool.query(text, params),
};

export default db;
