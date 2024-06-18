<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import HandCoins from 'lucide-svelte/icons/hand-coins';
	import Button from './ui/button/button.svelte';
	import Wallet from 'lucide-svelte/icons/wallet';
	import LogOut from 'lucide-svelte/icons/log-out';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { page } from '$app/stores';
</script>

<div class="flex w-[4%] flex-col items-center justify-between py-5">
	<div class="flex flex-col items-center gap-5">
		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D28D9]">
			<Wallet size="25" />
		</div>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					variant="ghost"
					class=" hover:bg-[#6D28D9]/40 {$page.url.pathname === '/'
						? 'bg-primary/40 hover:bg-primary/80'
						: ''}"><HandCoins /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Dashboard</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
	<Tooltip.Root>
		<Tooltip.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" class=" hover:bg-[#6D28D9]/40" href="/login"
				><LogOut /></Button
			>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Sair</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>

<div class="flex h-screen">
	<Separator orientation="vertical" class="border-[0.1rem]" />
</div>
