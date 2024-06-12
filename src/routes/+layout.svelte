<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	let logado = data.logado;

	console.log(logado);
</script>

<ModeWatcher defaultMode={'dark'} />

<div class="flex h-full w-full">
	{#if logado === false}
		<Sidebar />
	{/if}
	<main class="flex h-full w-[90%] flex-col">
		<slot></slot>
	</main>
</div>
