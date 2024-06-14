<script lang="ts">
	// @ts-nocheck
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Calendar from './Calendar.svelte';
	import SelectStatus from './SelectStatus.svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import { onMount } from 'svelte';

	export let despesa: any = {};
	let dataInicial = despesa.data;
	console.log(dataInicial);
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="h-12 hover:bg-[#6D28D9]/40">
			<Pencil color="#6D28D9" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<form
			action="?/editarDespesa"
			method="post"
			class="flex h-full w-full flex-col items-center justify-between py-5"
		>
			<div>
				<Sheet.Header class="flex items-center justify-center">
					<Sheet.Title>Editar cadastro</Sheet.Title>
					<Sheet.Description>Editar sua conta já cadastrada</Sheet.Description>
				</Sheet.Header>
				<div class="flex flex-col gap-6 pt-10">
					<Input
						class="h-12 w-[20rem]"
						id="NomeConta"
						name="nomeConta"
						bind:value={despesa.nome}
						placeholder="Nome da conta"
						autocapitalize="none"
						autocorrect="off"
					/>
					<Input
						class="h-12 w-[20rem]"
						id="valorConta"
						name="valorConta"
						bind:value={despesa.valor}
						placeholder="Valor"
						autocapitalize="none"
						autocorrect="off"
					/>
					<Calendar bind:value={dataInicial} initialValue={dataInicial} />
					<SelectStatus bind:value={despesa.status} />
					<input type="hidden" name="id" value={despesa.id} />
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close asChild>
					<div class="flex flex-col gap-3">
						<Button class="h-12 w-[20rem]" formaction="?/editarDespesa" type="submit">
							Salvar edição
						</Button>
						<Button
							class="h-12 w-[20rem] border-2 bg-inherit hover:bg-muted"
							formaction="?/excluirDespesa"
							type="submit"
						>
							Excluir despesa
						</Button>
					</div>
				</Sheet.Close>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
