<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON

	${	let tablicaObiektow = ''

	if (currentDirsJSON && currentDirsJSON.directories) {
		tablicaObiektow = Object.keys(currentDirsJSON.directories).map((key) => {
			if (currentDirsJSON.directories[key] === null) {
				currentDirsJSON.directories[key] = {} // domyślna wartość
			}
			return { name: key, ...currentDirsJSON.directories[key] }
		})

		console.log(tablicaObiektow)
	}

	console.log(tablicaObiektow)}


</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each tablicaObiektow as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
