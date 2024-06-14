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
		const response = await fetch('http://localhost:5173/api/listarContas');
		const data = await response.json();
		despesas = data;
		console.log(despesas);
	});

	function handleEdit(despesa: any) {
		selectedDespesa = despesa;
	}
</script>

<div class="flex h-full w-3/4 flex-col gap-5 pt-5">
	<div class="flex w-full justify-between">
		<h1 class="text-[1.6rem] font-semibold">Olá <span class="text-[#6D28D9]">User!</span></h1>
		<SheetAdd />
	</div>
	<div class="flex justify-between gap-5">
		<CardGraficos />
		<CardGraficos />
		<CardGraficos />
	</div>
	<div class="flex flex-col gap-3">
		<Card class="flex h-12 items-center justify-between pr-14">
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Despesa</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Valor</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Vencimento</h1>
			<h1 class="w-1/4 text-center text-[1.1rem] font-bold">Status</h1>
		</Card>
		{#await despesas}
			<p>Carregando...</p>
		{:then despesas}
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
						<Button on:click={() => handleEdit(despesa)}>
							<SheetEdit {despesa} />
						</Button>
					</Card>
				</form>
			{/each}
		{/await}
	</div>
</div>
