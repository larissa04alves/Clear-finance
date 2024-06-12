<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import HandCoins from 'lucide-svelte/icons/hand-coins';
	import Button from './ui/button/button.svelte';
	import Wallet from 'lucide-svelte/icons/wallet';
	import TrendingUp from 'lucide-svelte/icons/trending-up';
	import LogOut from 'lucide-svelte/icons/log-out';
</script>

<div class="flex w-[4%] flex-col items-center justify-between py-5">
	<div class="flex flex-col items-center gap-5">
		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D28D9]">
			<Wallet size="25" />
		</div>
		<Button variant="ghost" class=" hover:bg-[#6D28D9]/40">
			<HandCoins />
		</Button>
		<Button variant="ghost" class=" hover:bg-[#6D28D9]/40">
			<TrendingUp />
		</Button>
	</div>
	<Button variant="ghost" class="hover:bg-[#6D28D9]/40" href="/login">
		<LogOut />
	</Button>
</div>

<div class="flex h-screen">
	<Separator orientation="vertical" class="border-[0.1rem]" />
</div>
