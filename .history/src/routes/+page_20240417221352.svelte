<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-center my-5">
	{#each data.files.directories as dir}
		<img src="src/icons/icons8-folder-144.png" alt="" />

		<h2>{dir['name']}</h2>
	{/each}
</div>
