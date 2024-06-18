<script lang="ts">
	import CardGraficos from '$lib/components/CardGraficos.svelte';
	import SheetAdd from '$lib/components/SheetAdd.svelte';
	import SheetEdit from '$lib/components/SheetEdit.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import Card from '$lib/components/ui/card/card.svelte';
	import { onMount } from 'svelte';

	let despesas: any[] = [];
	let selectedDespesa: any = null;

	onMount(async () => {
		await fetchDespesas();
	});

	async function fetchDespesas() {
		try {
			const response = await fetch('/api/listarContas');
			const data = await response.json();
			despesas = data;
		} catch (error) {
			console.error('Erro ao carregar despesas:', error);
		}
	}

	function handleEdit(despesa: any) {
		selectedDespesa = despesa;
	}

	function handleFormSubmit(e: CustomEvent<any>): void {
		throw new Error('Function not implemented.');
	}
</script>

<div class="flex h-full w-3/4 flex-col gap-5 pt-5">
	<div class="flex w-full justify-between">
		<h1 class="text-[1.6rem] font-semibold">Olá <span class="text-[#6D28D9]">User!</span></h1>
		<SheetAdd />
	</div>
	<div class="flex justify-between gap-5">
		<CardGraficos {despesas} tipo="total" />
		<CardGraficos {despesas} tipo="semana" />
		<CardGraficos {despesas} tipo="dia" />
	</div>
	<div class="flex flex-col gap-3">
		<Card class="flex h-12 items-center justify-between pr-14">
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Despesa</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Valor</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Vencimento</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Status</h1>
		</Card>
		{#if despesas.length === 0}
			<p>Carregando...</p>
		{:else}
			{#each despesas as despesa}
				<form class="flex items-center justify-between gap-3">
					<Card class="flex h-12 w-1/4 items-center justify-center text-center">
						<h1 class="font-bold">{despesa.nome}</h1>
					</Card>
					<Card class="flex h-12 w-1/4 items-center justify-center text-center">
						<p>R$ {despesa.valor}</p>
					</Card>
					<Card class="flex h-12 w-1/4 items-center justify-center text-center">
						<p>{despesa.data}</p>
					</Card>
					<Card class="flex h-12 w-1/4 items-center justify-center text-center">
						<Badge>{despesa.status}</Badge>
					</Card>
					<Card class="flex h-12 w-14 items-center">
						<Button class="flex h-12 w-full bg-transparent" on:click={() => handleEdit(despesa)}>
							<SheetEdit {despesa} on:submit={handleFormSubmit} />
						</Button>
					</Card>
				</form>
			{/each}
		{/if}
	</div>
</div>
