import db from '$lib/database/db';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	loginUser: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const senha = data.get('senha');

		if (!email || !senha) {
			return {
				status: 400,
				body: {
					error: 'Todos os campos são obrigatórios.'
				}
			};
		}

		try {
			const result = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [
				email,
				senha
			]);

			if (result.rows.length === 0) {
				return {
					status: 400,
					body: {
						error: 'E-mail ou senha inválidos.'
					}
				};
			}

			// Configurar o cookie após o login bem-sucedido
			cookies.set('logado', 'true', {
				path: '/', // O cookie estará disponível em todo o site
				httpOnly: true, // O cookie não é acessível via JavaScript no cliente
				sameSite: 'strict', // Proteção contra CSRF
				maxAge: 1000000 // Duração do cookie (em segundos)
			});

			// Redirecionar para a página principal após o login bem-sucedido
			throw redirect(303, '/');
		} catch (error) {
			console.error('Erro ao logar usuário:', error);
			return {
				status: 500,
				body: {
					error: 'Erro ao logar usuário. Por favor, tente novamente.'
				}
			};
		}
	}
};
