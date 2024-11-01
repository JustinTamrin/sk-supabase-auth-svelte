<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ session } = data);
	onMount(() => {
		console.log(data.session);
	});
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if session}
		<p>Welcome, {session.user.email}</p>
	{:else}
		<p>Let's learn how to register and login users!</p>
		<div class="auth-buttons">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>
