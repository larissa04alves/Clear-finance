<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Pencil from 'lucide-svelte/icons/pencil';
	import SelectStatusEdit from './SelectStatusEdit.svelte';
	import { Label } from '$lib/components/ui/label/index.js';

	export let despesa: any = {};

	let nomeConta = despesa.nome;
	let valorConta = despesa.valor;
	let dataConta = despesa.data;
	let statusConta = despesa.status;

	// Função para formatar a data no formato YYYY-MM-DD
	function formatDate(dateStr: any) {
		const [day, month, year] = dateStr.split('/');
		return `${year}-${month}-${day}`;
	}

	$: {
		dataConta = formatDate(despesa.data);
	}
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="h-12 hover:bg-accent/80"><Pencil /></Button>
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
						id="nomeConta"
						name="nomeConta"
						bind:value={nomeConta}
						placeholder="Nome da conta"
						autocapitalize="none"
						autocomplete="off"
						autocorrect="off"
					/>
					<Input
						class="h-12 w-[20rem]"
						id="valorConta"
						name="valorConta"
						bind:value={valorConta}
						placeholder="Valor"
						autocapitalize="none"
						autocomplete="off"
						autocorrect="off"
					/>
					<Input
						class="h-12 w-[20rem]"
						id="dataConta"
						name="dataConta"
						bind:value={dataConta}
						autocapitalize="none"
						autocomplete="off"
						autocorrect="off"
					/>
					<div class="flex flex-col gap-2">
						<Label>Status Atual</Label>
						<Input
							class="h-12 w-[20rem]"
							id="statusConta"
							name="statusConta"
							bind:value={statusConta}
							placeholder="Status"
							autocapitalize="none"
							autocomplete="off"
							autocorrect="off"
							disabled={true}
						/>
						<SelectStatusEdit />
					</div>
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
