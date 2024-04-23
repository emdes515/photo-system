<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDirs

	const arrOfCurrentDirsName = Object.keys(dirs).map((key) => {
		return { name: key, ...dirs[key] }
	})
	console.log(arrOfCurrentDirsName)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dir}
		<Folder dirName={dir.name} dirPath={dir.path} {currentDirs} />
	{/each}
</div>
