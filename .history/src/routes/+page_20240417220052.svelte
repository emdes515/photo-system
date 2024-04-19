<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-center align-items-center">
	<div class="grid grid-cols-3 w-20">
		{#each data.files.directories as dir}
			<div class="w-100">
				{dir['name']}
			</div>
		{/each}
	</div>
</div>
