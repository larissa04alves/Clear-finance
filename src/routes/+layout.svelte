<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let logado = data.logado;

	console.log(data);
</script>

<ModeWatcher defaultMode={'dark'} />

<div class="flex h-full w-full">
	{#if logado}
		<Sidebar />
	{/if}
	<main class="flex h-full w-full flex-col items-center justify-center">
		<slot {logado}></slot>
	</main>
</div>
