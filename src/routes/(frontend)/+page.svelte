<script>
	import { Button } from '$components';
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { navigating } from '$app/stores';

	$: console.log(navigating);

	beforeNavigate((navigation) => {
		console.log(navigation);
	});
	afterNavigate((navigation) => {
		console.log(navigation);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">About</a>

<button
	on:click={() => {
		goto('/about');
	}}>Go to about</button
>

<Button />
