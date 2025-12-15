import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'devendra09',
    database: 'task1',
    connectionLimit: 10
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
