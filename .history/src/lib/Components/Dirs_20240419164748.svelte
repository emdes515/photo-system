<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	const arrOfCurrentDirsName = []

	for (const dirName in dirs) {
		arrOfCurrentDirsName.push(dirName)
	}

	console.log(dirs)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dirName}
		<Folder {dirName} path={'/test'} {currentDir} />
	{/each}
</div>
