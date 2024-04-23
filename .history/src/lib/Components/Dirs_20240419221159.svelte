<script>
	import { json } from 'express/lib/response'
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON

	if (currentDirsJSON === null) {
		currentDirsJSON = {}
	}

	let tablicaObiektow = Object.keys(currentDirsJSON.directories).map((key) => {
		if (currentDirsJSON.directories[key] === null) {
			currentDirsJSON.directories[key] = {} // domyślna wartość
		}
		return { name: key, ...currentDirsJSON.directories[key] }
	})

	console.log(tablicaObiektow)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each tablicaObiektow as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
