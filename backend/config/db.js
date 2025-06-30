import mysql from 'mysql2/promise';

export const querySQL = async (query) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'db',
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '123456',
            database: process.env.DB_NAME || 'bai3',
        });


        const [rows] = await connection.execute(query);
        return rows;
    } catch (err) {
        console.error('MySQL connection failed:', err);
        throw err;
    }
};
