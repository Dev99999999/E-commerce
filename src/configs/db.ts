import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT), 
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10
});

async function testConnection() {
    try {
        const conn = await pool.getConnection();
        console.log("Database connected successfully..");
        conn.release();
    } catch (err) {
        console.log("Database not connected..!", err);
    }
}

testConnection();

export default pool;
