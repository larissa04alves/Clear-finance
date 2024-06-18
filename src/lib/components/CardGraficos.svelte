<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { onMount } from 'svelte';
	import { writable, get } from 'svelte/store';

	export let despesas: any[] = [];
	export let tipo: string = 'total'; // Define o tipo de valor que este card vai exibir

	let valor = writable(0);

	onMount(() => {
		calcularValor();
	});

	$: calcularValor();

	function calcularValor() {
		if (!Array.isArray(despesas) || despesas.length === 0) {
			valor.set(0);
			return;
		}

		let total = 0;
		const hoje = new Date();
		const inicioSemana = new Date();
		inicioSemana.setDate(hoje.getDate() - hoje.getDay());

		if (tipo === 'total') {
			total = despesas.reduce((acc, despesa) => acc + (despesa.valor || 0), 0);
		} else if (tipo === 'semana') {
			total = despesas
				.filter((despesa) => new Date(despesa.data) >= inicioSemana)
				.reduce((acc, despesa) => acc + (despesa.valor || 0), 0);
		} else if (tipo === 'dia') {
			total = despesas
				.filter((despesa) => new Date(despesa.data).toDateString() === hoje.toDateString())
				.reduce((acc, despesa) => acc + (despesa.valor || 0), 0);
		}

		valor.set(total);
	}
</script>

<Card.Root class="w-1/3 ">
	<Card.Header>
		<Card.Title>
			{#if tipo === 'total'}
				Valor total
			{:else if tipo === 'semana'}
				Valor semanal
			{:else}
				Valor diário
			{/if}
		</Card.Title>
		<Card.Description>
			{#if tipo === 'total'}
				Todas as suas despesas
			{:else if tipo === 'semana'}
				Despesas da semana
			{:else}
				Despesas do dia
			{/if}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="text-3xl font-bold">R$ {get(valor)}</p>
	</Card.Content>
</Card.Root>
