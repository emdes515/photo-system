<script>
	import Gallery from './gallery/+page.svelte'

	export let data
</script>

<div class="flex justify-center my-5">
	{#each data.files.directories as dir}
		<div class="w-30 bg-primary flex flex-col justify-center align-items">
			<img src="./ico" alt="">

			<h2>{dir['name']}</h2>
		</div>
	{/each}
</div>
