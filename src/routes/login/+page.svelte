<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";
	import type { Snapshot } from "./$types";

    let username = '';
    let password = '';

    export const snapshot: Snapshot<{username: string, password: string}> = {
        capture: () => {
            return {username, password}
        },
        restore: (value) => {
            username = value.username
            password = value.password;
        }
    }

    const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        const resJSON = await response.json();
        console.log(resJSON);
        if (response.ok) {
            invalidateAll();
        } else {
            alert(resJSON.message);
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <label for="username">Username</label>
    <input bind:value={username} id="username" name="username" type="text" />
    <br />
    <br />
    <label for="password">Password</label>
    <input bind:value={password} id="password" name="password" type="password" />
    <br />
    <br />
    <button>Submit</button>
</form>