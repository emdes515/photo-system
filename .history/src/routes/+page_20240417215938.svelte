<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="grid grid-co">
	{#each data.files.directories as dir}
		<div>
			{dir['name']}
		</div>
	{/each}
</div>
