import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const logado = cookies.get('logado');

	if (!logado && url.pathname !== '/login') {
		throw redirect(303, '/login');
	} else if (logado && url.pathname === '/login') {
		throw redirect(303, '/');
	}

	return {
		logado: !!logado
	};
};
