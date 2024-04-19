<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	console.log(Object.values(dirs))
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dirName}
		<Folder {dirName} dirPath={'/test'} {currentDir} />
	{/each}
</div>
