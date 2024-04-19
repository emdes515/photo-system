<script>
	import Folder from './Folder.svelte'

	export let dirs
	export let currentDir

	const arrOfCurrentDirsName = Object.keys(dirs).map((key) => {...dirs[key], key}).
	console.log(arrOfCurrentDirsName)
</script>

<div class="flex justify-start flex-wrap flex-grow">
	{#each arrOfCurrentDirsName as dir}
		<Folder {dir} dirPath={'/test'} {currentDir} />
	{/each}
</div>
