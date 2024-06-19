<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import loginPage from '$lib/img/loginPage.jpg';
	import googleIcon from '$lib/img/googleicon.svg';

	export let logado: any;
	console.log('denro do slot logado:', logado);
</script>

<div class="flex h-full w-full">
	<img class="flex h-screen w-1/2" src={loginPage} alt="Imagem login" />
	<div class="flex w-1/2 flex-col items-center justify-center gap-5">
		<div class="flex w-1/2 flex-col">
			<h1 class="text-lg font-semibold">
				Entre no <span class=" text-primary">Clear Finance</span>
			</h1>
		</div>
		<form action="?/loginUser" method="post" class="flex w-full flex-col items-center gap-5">
			<Input
				class="h-14 w-1/2 font-semibold"
				id="email"
				type="email"
				placeholder="Email"
				name="email"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
			/>
			<Input
				class="h-14 w-1/2 font-semibold"
				id="password"
				type="password"
				name="senha"
				placeholder="Senha"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
			/>

			<div class="flex w-full flex-col items-center gap-3">
				<Button type="submit" formaction="?/loginUser" class="h-14 w-1/2">Entrar na conta</Button>
				<button class="text-sm font-semibold text-gray-500 hover:text-primary-foreground">
					Não possui uma conta?
				</button>
			</div>
		</form>

		<div class="flex w-1/2 items-center justify-center gap-5">
			<Separator class="flex w-[41%] border " />
			<p class="font-semibold text-gray-500">ou</p>
			<Separator class="flex w-[41%] border" />
		</div>
		<Button class="h-14 w-1/2 border-2 bg-inherit hover:bg-muted">
			<span><img class="w-3/5" src={googleIcon} alt="icone google" /></span>Entre com o Google
		</Button>
	</div>
</div>
