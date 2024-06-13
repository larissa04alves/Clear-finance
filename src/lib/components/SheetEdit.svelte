<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Calendar from './Calendar.svelte';
	import SelectStatus from './SelectStatus.svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="h-12 hover:bg-[#6D28D9]/40"
			><Pencil color="#6D28D9" /></Button
		>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<div class=" flex h-full w-full flex-col items-center justify-between py-5">
			<div>
				<Sheet.Header class="flex items-center justify-center">
					<Sheet.Title>Editar cadastro</Sheet.Title>
					<Sheet.Description>Editar sua conta já cadastrada</Sheet.Description>
				</Sheet.Header>
				<div class="flex flex-col gap-6 pt-10">
					<Input
						class="h-12 w-[20rem]"
						id="Nome-conta"
						placeholder="Nome da conta"
						autocapitalize="none"
						autocorrect="off"
					/>
					<Input
						class="h-12 w-[20rem]"
						id="Nome-conta"
						placeholder="Valor"
						autocapitalize="none"
						autocorrect="off"
					/>
					<Calendar />
					<SelectStatus />
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close asChild let:builder>
					<Button class="h-12 w-[20rem]" builders={[builder]} type="submit">Salvar edição</Button>
				</Sheet.Close>
			</Sheet.Footer>
		</div>
	</Sheet.Content>
</Sheet.Root>
