import pkg from 'pg';
const { Pool } = pkg;

const config = {
	database: String(import.meta.env.POSTGRES_DB || 'finance'),
	user: String(import.meta.env.POSTGRES_USER || 'postgres'),
	password: String(import.meta.env.POSTGRES_PASSWORD || 'admin'),
	host: String(import.meta.env.POSTGRES_HOST || 'localhost'),
	port: Number(import.meta.env.POSTGRES_PORT || 5432)
};

const db = new Pool(config);

export const connectDB = async () => await db.connect();

export default db;
