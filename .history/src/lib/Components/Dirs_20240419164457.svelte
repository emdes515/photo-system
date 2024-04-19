<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	const arrOfCurrentDirsName = []

	for (const dirName of dirs) {
		arrOfCurrentDirsName.push(dirName)
	}

	console.log(dirs)
</script>

{#each arrOfCurrentDirsName as dir}{/each}

<div class="flex justify-start flex-wrap flex-grow">
	<Folder label={'test123'} path={'/test'} {currentDir} />
</div>
