import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const querySQL = async (query) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQLHOST,
            port: process.env.MYSQLPORT,
            user: process.env.MYSQLUSER,
            password: process.env.MYSQLPASSWORD,
            database: process.env.MYSQLDATABASE,
        });



        const [rows] = await connection.execute(query);
        return rows;
    } catch (err) {
        console.error('MySQL connection failed:', err);
        throw err;
    }
};
