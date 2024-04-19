<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-start m-10">
	{#each data.files.directories as dir}
		<div class="flex flex-col text-center px-5">
			<img src="src/icons/icons8-folder-144.png" alt="folder" />
			<h2 class="font-bold">{dir['name']}</h2>
		</div>
	{/each}
</div>
