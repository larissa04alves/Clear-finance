<script>
	import CardGraficos from '$lib/components/CardGraficos.svelte';
	import SheetAdd from '$lib/components/SheetAdd.svelte';
	import SheetEdit from '$lib/components/SheetEdit.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
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
		<form class="flex items-center justify-between gap-3">
			<Card class="flex h-12 w-1/4 items-center justify-center text-center">
				<h1 class="font-bold">"Mensalidade Academia"</h1>
			</Card>
			<Card class="flex h-12 w-1/4 items-center justify-center text-center">
				<p>R$ "100.00"</p>
			</Card>
			<Card class="flex h-12 w-1/4 items-center justify-center text-center">
				<p>"00/00/0000"</p>
			</Card>
			<Card class="flex h-12 w-1/4 items-center justify-center text-center">
				<Badge>Em aberto</Badge>
			</Card>
			<Card class="flex h-12 w-14 items-center">
				<SheetEdit />
			</Card>
		</form>
	</div>
</div>
