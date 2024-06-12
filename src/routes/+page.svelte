<script>
	import Calendar from '$lib/components/calendar.svelte';
	import CardGraficos from '$lib/components/cardGraficos.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex h-full w-full flex-col gap-5 px-32 pt-5">
	<h1 class="text-[1.6rem] font-semibold">Olá <span class="text-[#6D28D9]">User!</span></h1>
	<div class="flex justify-between gap-5">
		<CardGraficos />
		<CardGraficos />
		<CardGraficos />
	</div>
	<Card.Root>
		<Card.Header>
			<Card.Title>"Nome do boleto"</Card.Title>
		</Card.Header>
		<Card.Content>
			<Calendar />
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
</div>
