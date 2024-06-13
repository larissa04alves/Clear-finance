<!-- <script lang="ts">
	import * as Select from '$lib/components/ui/select';
</script>

<Select.Root>
	<Select.Trigger class="h-12 w-[20rem]">
		<Select.Value class="text-gray-400" placeholder="Status do pagamento" />
	</Select.Trigger>
	<Select.Content >
		<Select.Item value="pago">Pago</Select.Item>
		<Select.Item value="aberto">Em aberto</Select.Item>
		<Select.Item value="atrasado">Atrasado</Select.Item>
		<Select.Item value="cancelado">Cancelado</Select.Item>
	</Select.Content>
</Select.Root> -->
<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';

	const status = [
		{ value: 'pago', label: 'Pago' },
		{ value: 'aberto', label: 'Em aberto' },
		{ value: 'atrasado', label: 'Atrasado' },
		{ value: 'cancelado', label: 'Cancelado' }
	];
</script>

<Select.Root portal={null}>
	<Select.Trigger class="w-[180px]">
		<Select.Value placeholder="Selecione o status" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each status as status}
				<Select.Item value={status.value} label={status.label}>{status.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="statusConta" />
</Select.Root>
