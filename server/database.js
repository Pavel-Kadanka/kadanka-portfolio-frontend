import mysql from 'mysql2/promise';
import fs from 'fs';

// Function to create and return a MySQL connection
export const getConnection = async () => {
  const uri = process.env.DB_URI;
  const url = new URL(uri);

  const connection = await mysql.createConnection({
    host: url.hostname,
    port: url.port,
    user: url.username,
    password: url.password,
    database: 'defaultdb',
    ssl: {
      ca: fs.readFileSync('ca.pem'), // Path to your CA certificate
      rejectUnauthorized: true // Enable SSL verification
    }
  });

  return connection;
};
