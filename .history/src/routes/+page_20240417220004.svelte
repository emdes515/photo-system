<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="grid grid-cols-3 w-100">
	{#each data.files.directories as dir}
		<div class="w-100">
			{dir['name']}
		</div>
	{/each}
</div>
