<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-center my-5">
	<div class="grid grid-cols-3 w-20">
		{#each data.files.directories as dir}
			<div class="w-100">
				<h2></h2>
				{dir['name']}
			</div>
		{/each}
	</div>
</div>
