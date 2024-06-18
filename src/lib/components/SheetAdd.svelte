<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Plus from 'lucide-svelte/icons/plus';
	import Calendar from './Calendar.svelte';
	import SelectStatus from './SelectStatus.svelte';

	let selectedDate: string = '';

	function handleDateSelected(event: { detail: { date: string } }) {
		selectedDate = event.detail.date;
	}
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button class="bg-primary font-bold hover:bg-primary/80" builders={[builder]} variant="outline">
			<span><Plus /></span>Adicionar conta
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<form
			action="?/criarDespesa"
			method="post"
			class="flex h-full w-full flex-col items-center justify-between py-5"
		>
			<div>
				<Sheet.Header class="flex items-center justify-center">
					<Sheet.Title>Novo cadastro</Sheet.Title>
					<Sheet.Description>Adicione sua nova despesa</Sheet.Description>
				</Sheet.Header>
				<div class="flex flex-col gap-6 pt-10">
					<Input
						name="nomeConta"
						class="h-12 w-[20rem]"
						id="nomeConta"
						placeholder="Nome da conta"
						autocapitalize="none"
						autocomplete="off"
						autocorrect="off"
					/>
					<Input
						name="valorConta"
						class="h-12 w-[20rem]"
						id="valorConta"
						placeholder="Valor"
						autocapitalize="none"
						autocomplete="off"
						autocorrect="off"
					/>
					<Calendar on:dateSelected={handleDateSelected} />
					<Input type="hidden" name="data" value={selectedDate} />
					<SelectStatus />
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close asChild>
					<Button class="h-12 w-[20rem]" formaction="?/criarDespesa" type="submit"
						>Salvar cadastro</Button
					>
				</Sheet.Close>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
