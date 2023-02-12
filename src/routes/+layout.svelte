<script>
	import Logo from '$lib/components/Logo.svelte'
	import '../app.css'
</script>

<nav>
	<Logo />
	<div class="links">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</div>
</nav>
<div class="px-4 mx-auto w-full h-full">
	<slot />
</div>
