<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher defaultMode={'dark'} />
<!-- if user estiver logado mostrar header -->
<!-- <header></header> -->
<!-- Else esconder header -->
<main class="flex h-full w-full flex-col">
	<slot></slot>
</main>
