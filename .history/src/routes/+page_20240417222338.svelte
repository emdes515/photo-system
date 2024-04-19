<script>
	import Gallery from './[slug]/+page.svelte'

	export let data
</script>

<div class="flex justify-start m-10">
	{#each data.files.files as dir}

	{/each}
</div>
