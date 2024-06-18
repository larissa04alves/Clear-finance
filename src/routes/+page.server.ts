import db from '$lib/database/db';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	criarDespesa: async ({ request }) => {
		const data = await request.formData();
		const nomeConta = data.get('nomeConta');
		const valorConta = data.get('valorConta') as string;
		const dataConta = data.get('dataConta');
		const statusConta = data.get('statusConta');

		if (!nomeConta || !valorConta || !dataConta || !statusConta) {
			return {
				status: 400,
				body: {
					error: 'Todos os campos são obrigatórios.'
				}
			};
		}

		const valorContaRegex = /^[0-9]+([.,][0-9]{1,2})?$/;
		if (!valorContaRegex.test(valorConta)) {
			return {
				status: 400,
				body: {
					error: 'O valor da conta deve ser um número válido.'
				}
			};
		}

		const valorContaFormatado = valorConta.replace(',', '.');

		try {
			await db.query('INSERT INTO finance (nome, valor, data, status) VALUES ($1, $2, $3, $4)', [
				nomeConta,
				valorContaFormatado,
				dataConta,
				statusConta
			]);
			return {
				status: 200,
				body: {
					message: 'Despesa criada com sucesso!'
				}
			};
		} catch (error) {
			console.error('Erro ao inserir despesa:', error);
			return {
				status: 500,
				body: {
					error: 'Erro ao criar despesa. Por favor, tente novamente.'
				}
			};
		}
	},

	excluirDespesa: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		try {
			await db.query('DELETE FROM finance WHERE id = $1', [id]);
			return {
				status: 200,
				body: {
					message: 'Despesa excluída com sucesso!'
				}
			};
		} catch (error) {
			console.error('Erro ao excluir despesa:', error);
			return {
				status: 500,
				body: {
					error: 'Erro ao excluir despesa. Por favor, tente novamente.'
				}
			};
		}
	},

	editarDespesa: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const nomeConta = data.get('nomeConta');
		const valorConta = data.get('valorConta') as string;
		const dataConta = data.get('dataConta');
		const statusConta = data.get('statusConta');

		if (!id || !nomeConta || !valorConta || !dataConta || !statusConta) {
			return {
				status: 400,
				body: {
					error: 'Todos os campos são obrigatórios.'
				}
			};
		}

		const valorContaRegex = /^[0-9]+([.,][0-9]{1,2})?$/;
		if (!valorContaRegex.test(valorConta)) {
			return {
				status: 400,
				body: {
					error: 'O valor da conta deve ser um número válido.'
				}
			};
		}

		const valorContaFormatado = valorConta.replace(',', '.');

		try {
			await db.query(
				'UPDATE finance SET nome = $1, valor = $2, data = $3, status = $4 WHERE id = $5',
				[nomeConta, valorContaFormatado, dataConta, statusConta, id]
			);
			return {
				status: 200,
				body: {
					message: 'Despesa editada com sucesso!'
				}
			};
		} catch (error) {
			console.error('Erro ao editar despesa:', error);
			return {
				status: 500,
				body: {
					error: 'Erro ao editar despesa. Por favor, tente novamente.'
				}
			};
		}
	},

	logoutUser: async ({ cookies }) => {
		// Remove o cookie de autenticação
		cookies.set('logado', '', {
			path: '/',
			maxAge: -1
		});

		// Redireciona para a página de login após o logout
		throw redirect(303, '/login');
	}
};
