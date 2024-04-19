<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="">
	{#each data.files.directories as dir}
		<div>
			{dir['name']}
		</div>
	{/each}
</div>
