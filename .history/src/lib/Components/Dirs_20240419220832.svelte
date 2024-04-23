<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs
	export let currentDirsJSON

	let tablicaObiektow = Object.keys(json.directories).map((key) => {
		return { name: key, ...json.directories[key] }
	})
	console.log(tablicaObiektow)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each tablicaObiektow as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
