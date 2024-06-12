import pkg from 'pg';
const { Pool } = pkg;

const config = {
	database: import.meta.env.POSTGRES_DB,
	user: import.meta.env.POSTGRES_USER,
	pass: import.meta.env.POSTGRES_PASSWORD,
	host: import.meta.env.POSTGRES_HOST,
	port: import.meta.env.POSTGRES_PORT
};

const db = new Pool(config);

export const connectDB = async () => await db.connect();

export default db;
