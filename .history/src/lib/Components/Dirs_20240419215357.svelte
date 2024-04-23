<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each [] as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
