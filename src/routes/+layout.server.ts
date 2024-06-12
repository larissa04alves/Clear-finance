import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	let logado = false;
	return { logado };
}) satisfies LayoutServerLoad;
