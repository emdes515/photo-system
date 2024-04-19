<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	const arrOfCurrentDirsName = Object.keys(dirs).map((key) => {
		return { name: key, ...dirs[key] }
	})
	console.log(arrOfCurrentDirsName)

	function findSubdirectory(json, path) {
		const parts = path.split('/')
		let current = json

		for (const part of parts) {
			if (current.directories && current.directories[part]) {
				current = current.directories[part]
			} else {
				return null
			}
		}

		return current
	}

	// Przykładowe użycie:
	const subdirectory = findSubdirectory(dir, './a')

	if (subdirectory) {
		console.log(subdirectory)
	} else {
		console.log('Podkatalog nie został znaleziony')
	}
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDir} />
	{/each}
</div>
