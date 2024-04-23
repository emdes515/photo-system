<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON

	if (currentDirsJSON.directories) {
		const arrOfCurrentDirsSubdirs = Object.keys(currentDirsJSON.directories).map((key) => {
			return { name: key, ...currentDirsJSON.directories[key] }
		})
	}

	console.log(arrOfCurrentDirsSubdirs)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsSubdirs as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
