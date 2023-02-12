<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>{data.user.username}'s Profile</h1>
