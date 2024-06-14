import db from '$lib/database/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const listarDespesas = await db.query('SELECT * FROM finance');

	return new Response(JSON.stringify(listarDespesas.rows), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
