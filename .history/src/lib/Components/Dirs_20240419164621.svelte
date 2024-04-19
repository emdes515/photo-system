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

{#each arrOfCurrentDirsName as dirName}
	<div class="flex justify-start flex-wrap flex-grow">
		<Folder {dirName} path={'/test'} {currentDir} />
	</div>
{/each}
