<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;

	$: products = data.products.products;
</script>


<h2>{data.title}</h2>
<button on:click={() => invalidate('https://dummyjson.com/products')}>Rerun load function</button>

{#if products && products.length > 0}
	<ul id="products">
		{#each products as product}
		<li id={product.id.toString()}>
			<img src={product.thumbnail} alt={product.title} />
			<h3><a href="/products/{product.id}">{product.title}</a></h3>
			<p>{product.description}</p>
		</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}
	
	img {
		width: 100%;
	}
</style>