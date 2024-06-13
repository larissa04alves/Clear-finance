import db from '$lib/database/db';
import type { Actions } from './$types';

export const actions: Actions = {
	criarDespesa: async ({ request }) => {
		const data = await request.formData();
		const nomeConta = data.get('nomeConta');
		const valorConta = data.get('valorConta');
		const dataConta = data.get('data');
		const statusConta = data.get('statusConta');

		if (!nomeConta || !valorConta || !dataConta || !statusConta) {
			return {
				status: 400,
				body: {
					error: 'Todos os campos são obrigatórios.'
				}
			};
		}

		try {
			await db.query('INSERT INTO finance (nome, valor, data, status) VALUES ($1, $2, $3, $4)', [
				nomeConta,
				valorConta,
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
	}
};
