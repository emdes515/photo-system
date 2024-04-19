<script>
	import Gallery from './[slug]/+page.svelte'

	export let data
</script>

<div class="flex justify-start m-10">
	{#each data.files.files.directories as dir}
		<a href="./{dir['relativePath']}">
			<div class="flex flex-col text-center px-5 hover:cursor-pointer">
				<img src="src/icons/icons8-folder-144.png" alt="folder" />
				<h2 class="font-bold">{dir['name']}</h2>
			</div>
		</a>
	{/each}
</div>
