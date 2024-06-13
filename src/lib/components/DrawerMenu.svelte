<script lang="ts">
	import * as Drawer from '$lib/components/drawerDireita';
	import Button from './ui/button/button.svelte';
</script>

<Drawer.Root direction="right">
	<Drawer.Trigger class="rounded-[10px] bg-primary">Adicionar</Drawer.Trigger>
	<Drawer.Content class="justify-cente left-auto flex h-full w-1/4 flex-row items-center">
		<div class="flex h-full w-full flex-col items-center justify-center">
			<Drawer.Header>
				<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
				<Drawer.Description>This action cannot be undone.</Drawer.Description>
			</Drawer.Header>
			<div></div>
			<Drawer.Footer class="flex w-full ">
				<Button>Submit</Button>
				<Drawer.Close>Cancel</Drawer.Close>
			</Drawer.Footer>
		</div>
	</Drawer.Content>
</Drawer.Root>
