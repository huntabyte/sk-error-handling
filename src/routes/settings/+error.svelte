<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="error-container">
	{#if $page.status === 404}
		<h1>You must be lost.</h1>
		<a href="/">Go Home</a>
	{:else}
		<h1>Whoops. We weren't expecting that</h1>
		<p>We're investigating the issue.</p>
	{/if}
</div>
