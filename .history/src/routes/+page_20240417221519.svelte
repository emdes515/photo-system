<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-center my-5">
	{#each data.files.directories as dir}
		<div class="w-30 flex flex-col text-center">
			<img src="src/icons/icons8-folder-144.png" alt="folder" />
			<h2 class>{dir['name']}</h2>
		</div>
	{/each}
</div>
