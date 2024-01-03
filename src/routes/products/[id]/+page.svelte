<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    $: product = data.product
</script>

<h1>{product?.title}</h1>
<img src={product?.thumbnail} alt={product?.title} />
<p>{product?.description}</p>
{#await data.nested.comments}
Loading…
{:then data}
{#each data.comments as comment}
    <p>{comment.body}</p>
{/each}
{/await}