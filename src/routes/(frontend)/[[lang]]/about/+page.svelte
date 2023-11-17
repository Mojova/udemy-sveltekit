<script>
	import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    const name = 'John';
</script>

<h1>About {name}</h1>

<button on:click={() => {
    goto('/')
}}>Go to home</button>

{JSON.stringify($page.params)}
