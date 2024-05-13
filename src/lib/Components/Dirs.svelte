<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON

	let arrOfSubDirs = []
	$: {
		if (currentDirsJSON && currentDirsJSON.directories) {
			arrOfSubDirs = Object.keys(currentDirsJSON.directories).map((key) => {
				if (currentDirsJSON.directories[key] === null) {
					currentDirsJSON.directories[key] = {} // domyślna wartość
				}
				return { name: key, ...currentDirsJSON.directories[key] }
			})
		} else {
			arrOfSubDirs = []
		}
	}
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfSubDirs as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} folderID={dir.id} />
	{/each}
</div>
