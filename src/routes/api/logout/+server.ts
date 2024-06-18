import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	// Remove o cookie de autenticação
	cookies.set('logado', '', {
		path: '/',
		maxAge: -1
	});

	// Redireciona para a página de login após o logout
	throw redirect(303, '/login');
};
