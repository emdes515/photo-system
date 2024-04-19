<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-evenly my-5 w-40">
	{#each data.files.directories as dir}
		<div class="flex flex-col text-center">
			<img src="src/icons/icons8-folder-144.png" alt="folder" />
			<h2>{dir['name']}</h2>
		</div>
	{/each}
</div>
